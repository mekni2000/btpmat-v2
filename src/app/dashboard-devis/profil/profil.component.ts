import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, pluck, mergeMap, filter, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/espace-client/shared/auth.service';
import { BrandService } from 'src/app/boutique/shared/brand.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user$: Observable<any>
  countries$: Observable<any>

  pageTitle = 'Edit User';
  editForm: FormGroup;
  formError: { [id: string]: string };
  private validationMessages: { [id: string]: { [id: string]: string } };


  errorMessage: string;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private brand: BrandService,
    private fb: FormBuilder,
    ) { 

        // With FormBuilder
        this.editForm = this.fb.group({
          firstName: ['', [Validators.required,
                       Validators.minLength(3),
                       Validators.maxLength(50)]],
          lastName: ['', [Validators.required,
                          Validators.minLength(5),
                          Validators.maxLength(50)]],
          description: [''],
          address: ['',[Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50)]],
          phone: ['', [Validators.required, Validators.pattern("[0-9]{0-10}")]],
          email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      });

       // Watch all of the controls on the form
       this.editForm.valueChanges
       .subscribe(data => this.onValueChanged(data));

      // Initialize strings
      this.formError = {
        'firstName': '',
        'lastName': '',
        'description': '',
        'address': "",
        'phone': '',
        'email': ''
    };


    this.validationMessages = {
      'firstName': {
          'required': 'User title is required',
          'minlength': 'User title must be at least three characters.',
          'maxlength': 'User title cannot exceed 50 characters.'
      },
      'lastName': {
          'required': 'Director is required',
          'minlength': 'Director must be at least 5 characters.',
          'maxlength': 'Director cannot exceed 50 characters.'
      },
      'description': {
          'min': 'Rate the User between 1 (lowest) and 5 (highest).',
          'max': 'Rate the User between 1 (lowest) and 5 (highest).'
      },
      'address': {
        'required': 'User address is required',
        'minlength': 'User address must be at least three characters.',
        'maxlength': 'User address cannot exceed 50 characters.'
    },
    'phone': {
      'required': 'Phone is required',
  }, 
  'eamil': {
    'required': 'Email is required',
    'pattern': 'not a valid email'
}, 
  };

    }

    

  ngOnInit() {

    this.user$ = this.route.paramMap.pipe(
      map(params => params.get('userId')),
      switchMap(id => this.auth.getUser(id))
    )

    this.user$.subscribe(user => console.log('user', user))


    this.countries$ = this.brand.getCountries()
    this.countries$.subscribe(country => console.log('countries', country))



  }
 


  // Start of a generic validator
  onValueChanged(data: any): void {
    if (this.editForm) {
    Object.keys(this.formError).forEach(field => {
        const control = this.editForm.get(field);
        if (control) {
            const hasError = control.dirty && !control.valid;
            this.formError[field] = '';
            if (hasError) {
                Object.keys(<object>control.errors).forEach(rule =>
                        this.formError[field] += this.validationMessages[field][rule] + ' '
                );
            }
        }
    });
}
}
user : User
saveUser(editForm): void {
  console.log(editForm);

  // let editUser = {
  //   "profilePictureId": 0,
  //   "email": editForm.value.email,
  //   "phone": editForm.value.phone,
  //   "personalRegistrationInfo": {
  //     "firstName": editForm.value.firstName,
  //     "lastName": editForm.value.lastName,
  //     "description": editForm.value.description
  //   },
  //   "proRegistrationInfo": {
  //     "businessName": editForm.value.businessName,
  //     "address": editForm.value.address,
  //     "regCom": editForm.value.regCom
  //   }
  // }
   
  let email = editForm.value.email
  let phone = editForm.value.phone
  let firstName = editForm.value.firstName
  let lastName = editForm.value.lastName
  let description = editForm.value.description
  let address = editForm.value.address
  

  this.auth.getCurrentUser().then(user => {
      this.auth.getUser(user.uid).pipe(
       pluck('id'),
       switchMap(id => this.auth.editUser(id, email, phone, firstName, lastName, description))
      ).subscribe(user => console.log('upladted user', user))
  })



}

onSaveComplete(): void {
  // Reset the form to clear the flags
  this.editForm.reset();
}

  

}
