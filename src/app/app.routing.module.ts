import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

//Declarando uma constante contendo todas as rotas.

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'NaoEncontrado', component: CursoNaoEncontradoComponent }
];

//Exportando a constante 'routing' contendo todas as rotas já declaradas para ser importada no app.module
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule {


}
