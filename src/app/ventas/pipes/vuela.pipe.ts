
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'vuela'
})


export class VuelaPipe implements PipeTransform{

   transform( vuela: boolean): string {
    /*if (mayusculas)
     return 'HOLA MUNDO';
     else
     return 'hola mundo';
  */

    return (vuela)?'vuela': 'no vuela';
   }
}
