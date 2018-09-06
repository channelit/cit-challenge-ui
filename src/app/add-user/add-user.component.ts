import { Component, OnInit } from '@angular/core';

import { User } from '../models/User'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  // TODO: double check with carlos what property names are for user
  // TODO: bind user properties into template
  public user: User;

  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }

  addUser() {
  }
}
