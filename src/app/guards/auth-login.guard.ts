import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router){}

  async canActivate(): Promise<boolean>{

    let usuarioActivo = await this._authService.isLogged();    

    if(usuarioActivo){
      this._router.navigate(['home']);
      return false;
    }else{
      return true;
    };

  }
  
}
