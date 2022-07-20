import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'view/:id', component: ViewUserComponent},
  { path: 'add', component: AddUserComponent},
  { path: 'edit/:id', component: EditUserComponent},
  { path: 'delete/:id', component: DeleteUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
