import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Episodio, Personaje } from 'src/interfaces';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent implements OnInit {
  cargando: boolean = true;
  error: boolean = false;
  id: string = '';
  personaje!: Personaje;

  constructor(private route: ActivatedRoute, private router: Router, private _personajeService: PersonajesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.getPersonaje();
  }

  getPersonaje(){
    this.error = false;
    this.cargando = true;

    this._personajeService.getPersonaje(this.id).then((res: any) => {

      this.personaje = res;

      console.log(this.personaje);
      
      this.cargando = false;
      
    }).catch(err => {
      this.error = true;
      this.cargando = false;
    })
  }

  irAtras(){
    this.router.navigate([".."]);
  }

}
