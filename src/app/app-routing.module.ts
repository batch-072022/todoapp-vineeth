import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'addtask',component:AddTaskComponent},
  {path:'listtask',component:ListTasksComponent},
  {path:'edittask',component:EdittaskComponent},
  {path:'view-user',component:ViewUserComponent},
  {path:'users',component:ListUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
