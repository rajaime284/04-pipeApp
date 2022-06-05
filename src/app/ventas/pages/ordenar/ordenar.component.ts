import { Component, OnInit } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayuscula: boolean = true;
  ordenarPor: string = '';
  heroe: Heroe []= [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  cambiarEstado(){
   this.enMayuscula = !this.enMayuscula;
  }

cambiarOrden(ordena: string){
  this.ordenarPor = ordena;
}

}
