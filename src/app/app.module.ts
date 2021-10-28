import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';

import { ContadoresModule } from './contadores/contadores.module';
import { HeroesModule }      from './heroes/heroes.module';
import { DbzModule }         from './dbz/dbz.module';

import { AppComponent }      from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadoresModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
