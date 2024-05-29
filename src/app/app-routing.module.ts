import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenealogiaComponent } from './genealogia/genealogia.component';
import { MusicaComponent } from './musica/musica.component';
import { AjedrezComponent } from './ajedrez/ajedrez.component';
import { AcademiaComponent } from './academia/academia.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'academia', component: AcademiaComponent },
  { path: 'ajedrez', component: AjedrezComponent },
  { path: 'musica', component: MusicaComponent },
  { path: 'genealogia', component: GenealogiaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
