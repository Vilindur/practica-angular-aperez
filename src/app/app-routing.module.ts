import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes Navegables
import { HomeComponent } from './home/home.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { AcercadeComponent } from './acercade/acercade.component';
// Componente API RAWG
import { ListadovideojuegosComponent } from './listadovideojuegos/listadovideojuegos.component';
// Componentes CRUD
import { CrudgetComponent } from './crudget/crudget.component';
import { CrudgetbyidComponent } from './crudgetbyid/crudgetbyid.component';
import { CrudpostComponent } from './crudpost/crudpost.component';
import { CrudputComponent } from './crudput/crudput.component';
import { CruddeleteComponent } from './cruddelete/cruddelete.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'acercade', component: AcercadeComponent },

  // Rutas API RAWG
  { path: 'listadovideojuegos', component: ListadovideojuegosComponent },
  
  // Rutas CRUD
  { path: 'crudget', component: CrudgetComponent },
  { path: 'crudgetbyid', component: CrudgetbyidComponent },
  { path: 'crudpost', component: CrudpostComponent },
  { path: 'crudput', component: CrudputComponent },
  { path: 'cruddelete', component: CruddeleteComponent },

  // Ruta por defecto
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Página 404 para rutas no encontradas
  { path: '**', component: Pagina404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



