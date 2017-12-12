import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

//registrar os meus modulos (components)
import { AppComponent } from './app.component';
import { AppFuncionarioNovoComponent } from './funcionario/app.funcionario.novocomponent';
import { AppFuncionarioListarComponent } from './funcionario/app.funcionario.listarcomponent';


//configurar as rotas da aplicação
const appRota:Routes = [
	{ path: 'novo', component: AppFuncionarioNovoComponent},
	{ path: 'listar', component: AppFuncionarioListarComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    AppFuncionarioNovoComponent,
    AppFuncionarioListarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRota)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
