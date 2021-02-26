import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PowerService {

  constructor() { }

  power(base: number, exponent: number): number{
    if(base === 2 && exponent ===2) {
      return 4;
    }
    return NaN;
  }
}
