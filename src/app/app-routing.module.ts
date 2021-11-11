import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './View/api/api.component';
import { EjemploComponent } from './View/ejemplo/ejemplo.component';
import { InicioComponent } from './View/inicio/inicio.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'api', component: ApiComponent},
  {path: 'ejemplo', component: EjemploComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
