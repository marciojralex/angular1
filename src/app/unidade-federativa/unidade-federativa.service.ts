import { Injectable } from '@angular/core';

import { UnidadeFederativa } from '../model/unidade-federativa';
import { UNIDADESFEDERATIVAS } from '../mock/unidade-federativa-list';

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaService {

  constructor() { }

  getUnidadesFederativas(): UnidadeFederativa[]{
    return UNIDADESFEDERATIVAS;
  }
}
