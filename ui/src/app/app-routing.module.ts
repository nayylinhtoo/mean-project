import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUserComponent } from './users/view-user/view-user.component';

const routes: Routes = [
  // { path: 'users/view/:id', component: ViewUserComponent },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
