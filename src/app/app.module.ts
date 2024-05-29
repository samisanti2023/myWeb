import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { AcademiaComponent } from './academia/academia.component';
import { AjedrezComponent } from './ajedrez/ajedrez.component';
import { MusicaComponent } from './musica/musica.component';
import { GenealogiaComponent } from './genealogia/genealogia.component';

@NgModule({
  declarations: [					
    AppComponent,
      PrincipalComponent,
      AcademiaComponent,
      AjedrezComponent,
      MusicaComponent,
      GenealogiaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
