import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  userResult: any;
  userList: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.userService.getUsers().subscribe((data: any)=> {
      this.userResult = data;
      this.userList = this.userResult.results;
      console.log(this.userList);
    })
  }

}
