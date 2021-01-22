import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-listpage',
  templateUrl: './user-listpage.page.html',
  styleUrls: ['./user-listpage.page.scss'],
})
export class UserListpagePage implements OnInit {
  usertype=""
  constructor() { }

  ngOnInit() {
    this.usertype="Sender";
  }

}
