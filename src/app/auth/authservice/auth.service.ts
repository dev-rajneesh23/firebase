import { Injectable ,NgZone, OnInit} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import { User } from './user';
import { AngularFireStorage  } from '@angular/fire/compat/storage';
import { AngularFirestore ,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
 isLoggedin:boolean=false;
 userdata:any;
  constructor(public fireauth:AngularFireAuth , ngzone:NgZone , public router:Router , public firestore:AngularFirestore) { }


 
  ngOnInit(): void {
    this.fireauth.authState.subscribe((user) => {
      if (user) {
        this.userdata = user;
        localStorage.setItem('user', JSON.stringify(this.userdata));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  SignIn(email: string, password: string) {
    return this.fireauth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.fireauth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['dashboard']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
     
   // Sign up with email/password
   SignUp(email: string, password: string) {
    return this.fireauth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  } 

  SendVerificationMail(){
    return this.fireauth.currentUser
    .then((u: any) => u.sendEmailVerification())
    .then(() => {
      this.router.navigate(['verify-email-address']);
    });
  }

  SetUserData(user:any){
    const userref : AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${user.uid}`
    );
    const userdata:User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
  }
  return userref.set(userdata, {
    merge: true,
  });
  }
  // Sign out
  SignOut() {
    return this.fireauth
    .signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }
  

}
