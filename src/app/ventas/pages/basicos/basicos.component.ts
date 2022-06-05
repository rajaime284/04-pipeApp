import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = "ramón";
  nombreUpper: string = "RAMÓN";
  nombreCompleto: string = "rAmÓn jaImE";

  fecha: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
