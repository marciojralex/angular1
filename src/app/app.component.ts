import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste-Front';
  unidadesFederativas: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

}
