import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  cerrarSesion(){

    this._authService.logout();

  }

  btnSalirActivo(){

    let routesPermitidas = ['/home','/'];

    if(this._router.url == '/home' || this._router.url.includes('/personaje')){
        return true;
    }else{
      return false;
    }
    
  }

}
