import { Component } from '@angular/core';
import {Geo, Address, Company, User} from "../services/interfaces";
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((response) => {
        this.users = response.users;
      })
  }
}
