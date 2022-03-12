import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/interfaces';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  cargando: boolean = false;
  error: any = {
    res: false,
    mensaje: ''
  };

  user: User = {
    email: '',
    password: '',
  }


  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  async registrarse(){

    if(this.cargando) return;

    this.cargando = true;
    this.error.res = false;

    if(this.user.email == '' || this.user.password == ''){
      this.alerta('Rellene todos los campos');
      this.cargando = false;
      return;
    }

    try{
      let res = await this._authService.registro(this.user);

      if(res) this._router.navigate(['home']);
    } catch(err: any){

      let mensajeError = 'Ha ocurrido un error. Vuelva a intentar mas tarde.';

      switch(err.code){
        case 'auth/weak-password':
          mensajeError = 'La contraseña debe tener 6 caracteres minimo';
          break;
        case 'auth/invalid-email':
          mensajeError = 'Email Invalido';
          break;
        case 'auth/email-already-in-use':
          mensajeError = 'Ya existe una cuenta con este correo';
          break;
      }

      this.alerta(mensajeError);

      this.cargando = false;
    }

  }

  alerta(mensaje: string){

    this.error.res = true;
    this.error.mensaje = mensaje;

  }

}
