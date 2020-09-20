import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, from, BehaviorSubject, of } from 'rxjs';

import {first, tap, switchMap, share, map, shareReplay} from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user.model';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

const httOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private userSubject = new BehaviorSubject(JSON.stringify(localStorage.getItem('user')))
  user$: Observable<any> = this.userSubject.asObservable()
  token: any
  userData
  private corsHeaders: HttpHeaders;

  constructor(
    private http: HttpClient, 
    private firebaseAuth: AngularFireAuth,
    private router: Router
    ) { 
    

    this.user$ =  this.firebaseAuth.authState.pipe(
      tap((user: any) => {
        localStorage.setItem('user', JSON.stringify(user))
       // this.userSubject.next(user)
      }),
   
    )
      
      
    }


    postToData(data): Observable<any>{
      return this.http.post('https://api.btpmat.ci/api/v1/Account/LeadSignup', data, httOptions )
     
    }

    public getToken(): string {
      return localStorage.getItem('tokenId');
    }
  

    public isAuthenticated(): Observable<boolean> {
      // get the token aand notify listeners!
      return Observable.create(obs => {
        obs.next(this.getToken());
      });
    }


    signup(email: string, password: string) {
      return new Promise((resolve, reject) => {
        this.firebaseAuth
        .auth
        .createUserWithEmailAndPassword(email, password)
        .then(value => {
          resolve(value)
          console.log(value) 
          this.firebaseAuth.auth.currentUser.getIdToken().then(token => localStorage.setItem('tokenId', token))
  
        })
        .catch(err => {
          console.log('Something went wrong:',err.message);
        }); 
   

      
      })  
      
      
    }

    doRegister(email, password): Observable<any>{
      return   from(this.firebaseAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then((authState: any) => {
        
      
     
      })
      .catch((error) => {
        console.log(error);
        throw error;
      }));

    }

    login(email: string, password: string) {
      return new Promise((resolve, reject) => { this.firebaseAuth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          resolve(value);
          console.log('Nice, it worked!');
          this.firebaseAuth.auth.currentUser.getIdToken().then(token => localStorage.setItem('tokenId', token))
        })
        .catch(err => {
          console.log('Something went wrong:',err.message);
        })
      })
    }


    doLogin(value){
      return new Promise<any>((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
          this.firebaseAuth.auth.currentUser.getIdToken().then(token => localStorage.setItem('tokenId', token))
         
          console.log('Nice, it worked!');
        }, err => reject(err))
      })
    }
  
    logout() {
      this.firebaseAuth
        .auth
        .signOut();
    }

    doLogout(){
      return new Promise((resolve, reject) => {
        if(firebase.auth().currentUser){
          this.firebaseAuth.auth.signOut();
          localStorage.clear();
          resolve();
        }
        else{
          reject();
        }
      });
    }




    doGoogleLogin(){
      return new Promise<any>((resolve, reject) => {
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        this.firebaseAuth.auth
        .signInWithPopup(provider)
        .then(res => {
         localStorage.setItem('user', JSON.stringify(res))
            return  this.http.post('https://api.btpmat.ci/api/v1/Account/LeadSignup', res, httOptions).subscribe(user => {
              console.log('new user', user)
            })
        }, err => {
          console.log(err);
          reject(err);
        })
      })
    }
  
    doFacebookLogin(){
      return new Promise<any>((resolve, reject) => {
        let provider = new firebase.auth.FacebookAuthProvider();
        this.firebaseAuth.auth
          .signInWithPopup(provider)
          .then(res => {
            localStorage.setItem('user', JSON.stringify(res))
            return  this.http.post('https://api.btpmat.ci/api/v1/Account/LeadSignup', res, httOptions).subscribe(user => {
              console.log('new user', user)
            })
          }, err => {
            console.log(err);
            reject(err);
          })
      })
    }



  
   
  



   getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().onAuthStateChanged(function(user){
        if (user) {
          resolve(user);
          console.log(user)
        } else {
          reject('No user logged in');
        }
      })
    })
  }


  signInWithFacebook() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }

//https://api.btpmat.ci/api/v1/Account/XlJPVkEvhwWLkSzB1k4sQNkyjBo1/VM
    //get user account
    getUser(userId): Observable<any>{
      return this.http.get(environment.endpoint + 'v1/Account/' + userId + '/VM')
    }


    get appUser$(): Observable<any> {
      return this.user$.pipe(
        switchMap(user => {
          if (user) return this.http.get(environment.endpoint + 'v1/Account/' + user.uid + '/VM')
          return of(null);
        })
      );
    }


    //edit
    //'Categories/MainPage/Products'}?ViewAs=${user}&PageIndex=${page}&PageSize=${pageSize}&Deleted=${0}
   //`${endpoint + 'products/' + productId}?ViewAs=${ViewAs}`, httOptions
    editUser(userId, Email?, Phone?, FirstName?, LastName?, Description?, address?, businessName?, regCom?, profilePicturId? ): Observable<any>{
      let currentUser = JSON.parse(JSON.stringify(this.firebaseAuth.auth.currentUser)).id
      return this.http.patch(`${environment.endpoint + 'v1/Account/' + userId}?Email=${Email}&Phone=${Phone}&FirstName=${FirstName}&LastName=${LastName}&Description=${Description}`, httOptions)
    }


    signInMode = false;
    phoneSignIn = false;

    private getProviderInstance(provider: string) {
      let providerInstance;
  
      switch (provider) {
        case environment.providers.GOOGLE:
          providerInstance = new firebase.auth.GoogleAuthProvider();
          break;
        case environment.providers.FACEBOOK:
          providerInstance = new firebase.auth.FacebookAuthProvider();
          break;
        default:
          providerInstance = new firebase.auth.GoogleAuthProvider();
          break;
      }
      return providerInstance;
      
    }
  
    signIn(mode: string, provider: string): Observable<any> {
      
      return from( mode === environment.modes.POPUP ? this.firebaseAuth.auth.signInWithPopup(this.getProviderInstance(provider))
      : this.firebaseAuth.auth.signInWithRedirect(this.getProviderInstance(provider))
).pipe(tap(user => {
  this.firebaseAuth.auth.currentUser.getIdToken().then(token => localStorage.setItem('tokenId', token))

}))

    
    }




    get windowRef(){

      return window;
    }




    sendCode(phone, captcha): Observable<any>{
      return from( this.firebaseAuth.auth.signInWithPhoneNumber(phone, captcha))
    }
    



    signInAnonymously() {

      this.firebaseAuth.auth.signInAnonymously();
    }
    logout2() {
      this.firebaseAuth.auth.signOut();
    }



    

}
