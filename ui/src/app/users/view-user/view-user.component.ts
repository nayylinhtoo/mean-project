import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  userId: string = '';
  userDetail: any;
  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data['id'];
    });

    if(this.userId){
      this.userService.viewUser(this.userId).subscribe(data => {
        this.userDetail = data;
        console.log(this.userDetail);
      });
    }

  }

}
