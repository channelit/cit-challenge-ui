import { Component, OnInit } from '@angular/core';

import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public user: User;

  constructor(private userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  addUser() {
    this.userService.addUser(this.user);
  }
}
