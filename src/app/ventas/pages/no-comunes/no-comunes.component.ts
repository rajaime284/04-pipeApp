import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = 'Ramón';
  genero: string = 'masculino';

  invitacionMapa= {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[]=  ['Maria', 'Juana', 'Dayron', 'Menelik', 'Anaisbel'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente espeando',
    '=2': 'tenemos 1 cliente espeando',
    'other': 'tenemos # clientes esperando'
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCliente(){
    if(this.genero === 'masculino')
    {
      this.nombre = 'Ivón';
      this.genero = 'femenino';
       }
    else{
      this.nombre = 'Ramón';
      this.genero = 'masculino';
    }

  }

  borrarCliente(){
    this.clientes.pop();
    console.log(this.clientes);
  }

  //KeyValuePipe

  persona = {
    nombre: 'Ramón',
    edad: '37',
    direccion: 'Alicante, España',
  }

  //JsonPipe
  heroes= [
  {
    nombre: 'Superman',
    vuela: 'true'
  },
  {
    nombre: 'Robin',
    vuela: 'false'
  },
  {
    nombre: 'Aquaman',
    vuela: 'false'
  }
  ]
//Async Pipe
 miObservable = interval(1000);

 valorPromesa = new Promise((resolve_, reject) => {
  setTimeout(() => {
   resolve_('Tenemos data de promesa');
 },8500);
});

}
