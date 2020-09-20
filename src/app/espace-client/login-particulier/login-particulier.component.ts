import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Observable, from, BehaviorSubject, Subject, fromEvent } from 'rxjs';
import { map, tap, switchMap, pluck, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { auth } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { CountriesService } from '../shared/countries.service';

@Component({
  selector: 'app-login-particulier',
  templateUrl: './login-particulier.component.html',
  styleUrls: ['./login-particulier.component.css']
})
export class LoginParticulierComponent implements OnInit {

  myForm: FormGroup;
  show=true
 
@ViewChild('codeVerification',{static:false}) private codeVerification:ElementRef ;
 


  isLoggedIn$: Observable<boolean>
  user


  countries$: Observable<any>

  constructor(
    private auth: AuthService, 
    private afAuth: AngularFireAuth,
    private countryService: CountriesService,
    private router: Router,
    private fb: FormBuilder,
    private renderer: Renderer2,

    ) {
      
      this.myForm = this.fb.group({
        email: ['', Validators.required ],
        password: ['', Validators.required]
      });

    }
    @ViewChild('searchInput', {static: true}) searchInput
  ngOnInit() {


    this.windowRef = this.auth.windowRef;

    

    this.auth.user$.pipe(
      map(user => user),
      switchMap(user => this.auth.postToData(user))
    ).subscribe(console.log)

  //  this.isLoggedIn$ = this.auth.user$.pipe(map(user => user))
   // this.isLoggedIn$.subscribe(console.log)



  
    this.countries$ = this.countryService.getCountries()
    this.countries$.subscribe(countries => console.log('all countries', countries))

    // fromEvent(this.searchInput.nativeElement, 'keyup')
    // .pipe(
    //   pluck('target', 'value'),
    //   // filter((searchTerm: any) => searchTerm.length > 2), //avoid length < 2
    //   // debounceTime(500), //emit last value 
    //   // distinctUntilChanged(), //rember the previous value and emit the new value if it s deffferent
    //   map(searchKey =>  searchKey),
    //  // switchMap(searchKey => this.productService.searchProduct(searchKey))

    // ).subscribe(res => {
    //   // this.products = res
    //   // this.productsSubject.next(this.products)
    //   console.log(res)
    // })


      

  }

  errorMessage
  login(loginForm) {
    let email: string = loginForm.value.email;
    let password: string = loginForm.value.password;
    this.auth.login(email, password).then(user => {

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login completed successfully ',
        showConfirmButton: false,
        timer: 5000
      })
     
   

      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      });
 
  }






  providers = environment.providers;
  modes = environment.modes;


  signInwithModeandProvider(mode: string, provider: string) {
    this.auth.signIn(mode, provider).subscribe(user => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login completed successfully ',
        showConfirmButton: false,
        timer: 5000
      })
    this.navigateTo()
    })
  }
  signInAnonymously() {
    this.auth.signInAnonymously();

  }
  toggleSigninMode() {

    this.auth.signInMode = !this.auth.signInMode;

    
  }

navigateTo(){
  this.auth.appUser$.subscribe(user => {
    if(user){
      this.router.navigate([ 'user', user.id, 'devis']);
    }
  
  })
  
}



  /* register with phone */

  phoneNumber: string;
  otp: string;
  windowRef: any;
  disableotpsendbtn = true;


  ngAfterViewInit() {
    this.windowRef.recaptchaVerifier = new auth.RecaptchaVerifier('recaptcha-container',{
      size: 'normal',
      callback: (response) => {
        this.disableotpsendbtn = false;
      
      }
     });
    this.windowRef.recaptchaVerifier.render();
  }

  sendOTP() {
    this.afAuth.auth.signInWithPhoneNumber(this.phoneNumber, this.windowRef.recaptchaVerifier).then((confirmationResult) =>{
      this.windowRef.confirmationResult = confirmationResult;
     this.show=!this.show
     console.log('amine')
    

    
    });
  }
  verifyPTP() {
    this.windowRef.confirmationResult.confirm(this.otp)
    .then((userCredentials) => {
      console.log(userCredentials)
     if(userCredentials){
      this.afAuth.auth.currentUser.getIdToken().then(token => localStorage.setItem('tokenId', token))

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login completed successfully ',
        showConfirmButton: false,
        timer: 5000
      })
      this.navigateTo()
     }
    });
  }

  togglePhoneSignIn() {
    this.auth.phoneSignIn = ! this.auth.phoneSignIn;
  }
  
  //  verfication(){
   //   this.show = !this.show;
 
   // const titleVerification:ElementRef=this.renderer.createElement('p');
   // const input:ElementRef  =this.renderer.createElement('input');
  //  this.renderer.appendChild(this.codeVerification.nativeElement,titleVerification)
   
  //  this.renderer.appendChild(this.codeVerification.nativeElement,input)
 // }
 
 private initForm(): void{
  this.myForm = this.fb.group({
    phone: ['', [Validators.required, this._validatePhoneNumberInput.bind(this)]]
  });
}

_validatePhoneNumberInput(c: AbstractControl): any {
  let inputValue: string = c.value.toString();
  // let phoneNumber: any = parsePhoneNumberFromString(inputValue, this.selectedCountry);
  // if(phoneNumber){
  //   if(phoneNumber.isValid()){
  //     return null;
  //   } else {
  //     return {
  //       phoneNumber: {
  //         valid: false
  //       }
  //     }
  //   }
  // } else {
  //   return {
  //     phoneNumber: {
  //       valid: false
  //     }
  //   }
  // }
}

resetPhoneNumber(event: any): void {
  this.myForm.controls['phone'].setValue('');
}

formatPhoneNumber(event: any): void {
  let inputValue: any = this.myForm.controls['phone'].value;
  // let phoneNumber: any = parsePhoneNumberFromString(inputValue, this.selectedCountry);
  // if(phoneNumber){
  //   this.selectedPhoneNumber = phoneNumber.number;
  //   this.register.controls['phone'].setValue(phoneNumber.formatInternational());
  // }
}
}
