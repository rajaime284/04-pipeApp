import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mayusculas'
})


export class MayusculasPipe implements PipeTransform{

   transform(value: string, mayusculas: boolean): string {
    /*if (mayusculas)
     return 'HOLA MUNDO';
     else
     return 'hola mundo';
  */

    return (mayusculas)?value.toLocaleUpperCase(): value.toLocaleLowerCase();
   }
}
