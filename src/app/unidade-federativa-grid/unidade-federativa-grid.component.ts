import { Component, OnInit } from '@angular/core';
import { UnidadeFederativa } from '../model/unidade-federativa';
import { UnidadeFederativaService} from '../unidade-federativa/unidade-federativa.service'

@Component({
  selector: 'app-unidade-federativa-grid',
  templateUrl: './unidade-federativa-grid.component.html',
  styleUrls: ['./unidade-federativa-grid.component.scss']
})
export class UnidadeFederativaGridComponent implements OnInit {
  unidadeFederativa: UnidadeFederativa
  unidadesFederativas: UnidadeFederativa[]

  constructor(private unidadeFederativaService:UnidadeFederativaService) { 
  }

  ngOnInit() {
    this.getUnidadesFederativas();
  }

  getUnidadesFederativas():void{
    this.unidadesFederativas = this.unidadeFederativaService.getUnidadesFederativas();
  }

  onSelect(unidade: UnidadeFederativa){
    this.unidadeFederativa = unidade;
  }
}
