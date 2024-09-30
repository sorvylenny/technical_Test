import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskformComponent } from './tasks/taskform/taskform.component';


const routes: Routes = [
  { path: '', redirectTo: '**', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
