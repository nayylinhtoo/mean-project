import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    AddCustomerComponent,
    DeleteCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,
    SearchCustomerComponent,
    ViewUserComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
