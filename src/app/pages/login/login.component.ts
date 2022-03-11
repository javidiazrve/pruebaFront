import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  cargando: boolean = false;
  error: any = {
    res: false,
    mensaje: '',
  };

  user: User = {email: '', password: ''};

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  async iniciarSesion(){
    
    this.cargando = true;
    this.error.res = false;

    if(this.user.email == '' || this.user.password == ''){
      this.alerta('Rellene todos los campos');
      this.cargando = false;
      return;
    }

    try{
      let res = await this._authService.login(this.user);

      if(res) this._router.navigate(['home']);
    }catch(err: any){

      let mensajeError = 'Ha ocurrido un error. Vuelva a intentar mas tarde.';

      switch(err.code){
        case 'auth/invalid-email':
          mensajeError = 'Email Invalido';
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          mensajeError = 'Correo o Contraseña incorrectos';
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
