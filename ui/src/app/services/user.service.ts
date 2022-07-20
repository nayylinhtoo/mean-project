import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}

    getUsers() {
      let url = environment.USER_BASE_URL+environment.USER.GET_ALL_USERS;
      return this.httpClient.get(url);
    }

    viewUser(id: string) {
      let url = environment.USER_BASE_URL+environment.USER.GET_USER_DETAIL+id;
      return this.httpClient.get(url);
    }

    addUser() {

      const newUserObj = {
        name: 'naynay',
        mail: 'mail@gmail.com',
        dob: '02-02-2000'
      };

      let url = environment.USER_BASE_URL+environment.USER.ADD_USER_DETAIL;
      this.httpClient.post(url, newUserObj);

    }

    // editUser(id, userObj){

    // }

    // deleteUser(id){

    // }

    // searchUser(keyword){

    // }

}
