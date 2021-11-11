import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './View/inicio/inicio.component';
import { MenuComponent } from './View/menu/menu.component';
import { ApiComponent } from './View/api/api.component';
import { EjemploComponent } from './View/ejemplo/ejemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    ApiComponent,
    EjemploComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
