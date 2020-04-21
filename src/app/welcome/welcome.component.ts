import { Component, OnInit } from '@angular/core';
import {UserInterface} from "../interfaces/user.interface";
import {UserService} from "../services/user.service";

@Component({
  selector: 'ngx-welcome',
  templateUrl: './welcome.component.html',
  providers: [UserService],
})
export class WelcomeComponent implements OnInit {

  public data;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const user = localStorage.getItem('user');

    this.userService.getUserInfo(user).subscribe((item: UserInterface) => {
      this.data = JSON.stringify(item, undefined, 4);
    }, (e) => {
      console.log(e);
      this.data = JSON.stringify({
        user: 'string',
        cash: 'number',
        meta: [],
      });
    });
  }

}
