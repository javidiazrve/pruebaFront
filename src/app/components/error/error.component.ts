import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Output() evento = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  reintentarConexion(){
    this.evento.emit();
  }

}
