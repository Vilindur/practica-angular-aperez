import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { Pagina404Component } from './pagina404/pagina404.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { HomeComponent } from './home/home.component';

import { ListadovideojuegosComponent } from './listadovideojuegos/listadovideojuegos.component';

import { CrudgetComponent } from './crudget/crudget.component';
import { CrudgetbyidComponent } from './crudgetbyid/crudgetbyid.component';
import { CrudpostComponent } from './crudpost/crudpost.component';
import { CrudputComponent } from './crudput/crudput.component';
import { provideHttpClient } from '@angular/common/http';
import { PuntoFinalPipe } from './punto-final.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Pagina404Component,
    AcercadeComponent,
    HomeComponent,
    ListadovideojuegosComponent,
    CrudgetComponent,
    CrudgetbyidComponent,
    CrudpostComponent,
    CrudputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PuntoFinalPipe
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
