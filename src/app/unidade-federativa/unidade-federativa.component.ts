import { Component, OnInit, Input } from '@angular/core';
import { UnidadeFederativa } from '../model/unidade-federativa';

@Component({
  selector: 'app-unidade-federativa',
  templateUrl: './unidade-federativa.component.html',
  styleUrls: ['./unidade-federativa.component.scss']
})
export class UnidadeFederativaComponent implements OnInit {
  @Input() unidadeFederativa: UnidadeFederativa 

  ngOnInit() {
  }

}
