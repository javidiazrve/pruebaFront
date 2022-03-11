import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Info, Personaje } from 'src/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  info: Info = {
    next: '',
    prev: '',
    count: 0,
    pages: 0
  };

  error: boolean = false;

  cargando: boolean = false;

  pagina: number = 1;

  personajes: Personaje[] = [];

  constructor(private _personajeService: PersonajesService) { }

  ngOnInit(): void {
    this.getPersonajes();
  }
  
  getPersonajes(){
    this.cargando = true;
    this.error = false;

    this._personajeService.getPersonajes().then((res: any) => {
      this.info = res.info
      this.personajes = res.personajes;

      this.cargando = false;
    }).catch((err) => {
      console.log('errorrrrr');
      this.error = true;
      this.cargando = false;
    })
    
  }

  changePage(option: string){

    this.error = false;

    if(this.cargando) return;

    if(option == 'next') this.pagina++;
    else this.pagina--;

    this.cargando = true;

    this._personajeService.getPage(this.pagina).then((res:any) => {
      this.info = res.info;
      
      this.personajes = res.results.map((el: any) => {        
        let personaje: Personaje = {
          ...el,
          origin: el.origin.name,
          location: el.location.name,
        };
        return personaje;
      })

      this.cargando = false;
    }).catch((err:any)=>{
      this.error = true;
      this.cargando = false;
    })
    

  }

  reiniciar(){
    this.personajes = [];
    this.pagina = 1;
    this.getPersonajes();
  }

  puedeAvanzar(){
    return this.pagina == this.info.pages;
  }

  puedeRetroceder(){
    return this.pagina == 1;
  }

}
