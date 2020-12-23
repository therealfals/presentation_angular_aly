import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService{
  constructor() {
  }
  formatMillier( nbr: number, sep: string){
    let nombre: string = nbr.toString() ;
    const reg = /(\d+)(\d{3})/;
    while ( reg.test( nombre)) {
      nombre = nombre.replace( reg, '$1' + sep + '$2');
    }
    return nombre;
  }
}
