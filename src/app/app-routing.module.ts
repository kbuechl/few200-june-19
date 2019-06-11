import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CommunicationsComponent } from './components/communications/communications.component';

const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent
}, {
  path: 'todo-list',
  component: TodoListComponent
}, {
  path: 'communications',
  component: CommunicationsComponent
}, {
  path: '**',
  redirectTo: 'dashboard'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
