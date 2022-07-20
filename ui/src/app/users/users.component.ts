import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

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
