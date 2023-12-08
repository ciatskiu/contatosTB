import { Injectable, NgZone } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioDados: any;

  constructor(private firebase: FirebaseService,
    private fireAuth: AngularFireAuth,
    private router: Router, private ngZone: NgZone) {
      this.fireAuth.authState.subscribe(user => {
        if(user){
          this.usuarioDados = user;
          localStorage.setItem('user',
          JSON.stringify(this.usuarioDados));
        }else{
          localStorage.setItem('user', 'null');
        }
      });
    }

    //Login com Email e Senha
    public signIn(email: string, password: string){}
    public signUpWithEmailPassword(email: string, password: string){}
    public recoverPassword(email: string){}

    //métodos gerais
    public signOut(){}
    public isLoggedIn(): boolean{
      return false;
    }
    public getUserLogged(){}



}
