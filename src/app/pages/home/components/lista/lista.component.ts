import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/interfaces';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() personajes: Personaje[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
