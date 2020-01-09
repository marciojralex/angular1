import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnidadeFederativaComponent } from './unidade-federativa/unidade-federativa.component';
import { UnidadeFederativaGridComponent } from './unidade-federativa-grid/unidade-federativa-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    UnidadeFederativaComponent,
    UnidadeFederativaGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
