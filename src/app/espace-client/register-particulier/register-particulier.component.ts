import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, shareReplay, switchMap, pluck} from 'rxjs/operators'

import { AngularFireAuth , } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'

@Component({
  selector: 'app-register-particulier',
  templateUrl: './register-particulier.component.html',
  styleUrls: ['./register-particulier.component.css']
})
export class RegisterParticulierComponent implements OnInit {
  
  users$: Observable<any>;
  user$: Observable<any>;
  // usersCollection: AngularFirestoreCollection<any>; //check if user exist

  myForm: FormGroup;

  constructor(
    private auth: AuthService,
    public afAuth: AngularFireAuth,
    // private afs: AngularFirestore,
    private router: Router,
    public fb: FormBuilder,
  ) {
    
    this.myForm = this.fb.group({
      // firstName: ['', [Validators.required]],
      // lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      // phone: ['', [Validators.required]],
      // photo: ['', [Validators.required]],
     }), ({
      validator: this.checkIfMatchingPasswords("password", "confirmPassword")
    })

  }

  checkIfMatchingPasswords(passwordKey: string, confirmPasswordKey: string){
    return (group: FormGroup) => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if(password.value == confirmPassword.value){
        return;
      } else {
        confirmPassword.setErrors({
          notEqualToPassword: true
        })
      }

    }
  }

  // checkeUserInvite(value: any) {
  //   this.usersCollection = this.afs.collection('users', ref => ref.where('email', '==', this.myForm.value.email))
  //   this.users$ = this.usersCollection.snapshotChanges().pipe(
  //     map(actions => {
  //       return actions.map(action => {
  //         const data = action.payload.doc.data() as any;
  //         //const id = action.payload.doc.id;
  //         return { 
  //           id: action.payload.doc.id,
  //           email: data.email,
  //           gym: data.gym
  //         }
  //       });
  //     })
  //   )

  //   this.users$.subscribe(snapshot => {
  //     if(snapshot.length == 0) {  
  //       console.log('Email match NOT found')
      
  //     } else {
  //       console.log('Email match found for user' + snapshot[0].id )
       
  //     }
  //   })
  // }


  user
  isLoggedIn$: Observable<boolean>
  ngOnInit() {
 //   this.user$ = this.afAuth.authState;

  //  this.user$.subscribe(user => console.log('user -->', user))
  // this.afAuth.authState.subscribe(
  //   (user => {
      
  //     localStorage.setItem('user', JSON.stringify(user))
  //     this.afAuth.auth.currentUser.getIdToken(true)
  //     .then(token => localStorage.setItem('tokenId', token))

  //     return    this.auth.postToData(user)
  //     .pipe(shareReplay(1))
  //     .subscribe(user => {
  //       this.router.navigate(['/dashboard-devis']);
  //     })
  //   })
  
  // )
 
  this.isLoggedIn$ = this.auth.user$.pipe(map(user => user !== null))
  }


  signup(signupform) {
    let email: string = signupform.value.email;
    let password: string = signupform.value.password;

    this.auth.signup(email, password).then(
      (user: any) => {
        console.log(user)

       let token = this.afAuth.auth.currentUser.getIdToken(true)
       .then(token => localStorage.setItem('tokenId', token))
       
      

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registration completed successfully ',
          showConfirmButton: false,
          timer: 5000
        })
      
        this.router.navigate([ this.user.id, '/dashboard-devis']);
      }
    )
  
  }

  doRegister(signupform) {
    let email: string = signupform.value.email;
    let password: string = signupform.value.password;
    this.auth.doRegister(email,password).subscribe(user => {
      console.log(user)
    })
  }

  tryFacebookLogin() {
    this.auth.doFacebookLogin()
      .then(user => {
       
        this.router.navigate(['/dashboard-devis']);
      });
  }
  tryGoogleLogin() {
    this.auth.doGoogleLogin()
    .then(user => {

     this.router.navigate(['/dashboard-devis']);

    });
  }


}
