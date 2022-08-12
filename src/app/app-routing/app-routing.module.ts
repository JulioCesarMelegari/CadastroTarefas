import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { TarefaRoutes } from '../tarefas/tarefas-routing.module';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'/tarefas/listar',
    pathMatch:'full'
  },
  ...TarefaRoutes
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
