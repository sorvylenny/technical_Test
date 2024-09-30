import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskformComponent } from './taskform/taskform.component';



const routes: Routes = [
  {
    path: '',
    component: TaskformComponent,
  },
  {
    path: 'tasklist',
    loadComponent: () => import('./task-list/task-list.component').then(m => m.TaskListComponent),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
