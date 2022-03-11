import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from 'src/interfaces';

@Component({
  selector: 'app-tarjeta-personaje',
  templateUrl: './tarjeta-personaje.component.html',
  styleUrls: ['./tarjeta-personaje.component.scss']
})
export class TarjetaPersonajeComponent implements OnInit {

  @Input()
  personaje!: Personaje;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  verPresonaje(){

    this.router.navigate(['personaje', this.personaje.id]);

  }

  setClassStatus(){

    if(this.personaje.status == 'Alive') return 'bg-success';

    if(this.personaje.status == 'Dead') return 'bg-danger';

    return 'bg-warning';

  }

}
