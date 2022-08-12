import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { Routes } from "@angular/router";
import { EditarComponent } from './editar/editar.component';

export const TarefaRoutes: Routes = [
  {
    path:'tarefas',
    redirectTo:'tarefas/listar'
  },
  {
    path:'tarefas/listar',
    component:ListarTarefaComponent
  },
  {
    path:'tarefas/cadastrar',
    component:CadastrarTarefaComponent
  },
  {
    path:'tarefas/editar/:id',
    component:EditarComponent
  }
];
