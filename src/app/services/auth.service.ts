import { Injectable } from '@angular/core';
import { User } from 'src/interfaces';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioActivo: boolean = false;

  constructor(private _auth: AngularFireAuth, private _router: Router) { 
  }
  
  login(user: User){
    
    return this._auth.signInWithEmailAndPassword(user.email,user.password);

  }

  registro(user:User){

    return this._auth.createUserWithEmailAndPassword(user.email,user.password);

  }

  logout(){

    this._auth.signOut().then(() => {
      this._router.navigate(['login']);
      
    });

  }

  async isLogged(): Promise<boolean>{

    return await new Promise<boolean>((resolve,rejected) => {

      this._auth.onAuthStateChanged((user) => {
        
        if(user) resolve(true);
        
        else resolve(false);
        
      });
    })
    
  }
}
