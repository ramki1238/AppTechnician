import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';
import {CommonUiControlService} from '../../providers/common-ui-control.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  constructor(private commonUictrl:CommonUiControlService,
    public formBuilder: FormBuilder) {
     
     }
loginDiv=true;
loginForm = new FormGroup({
  username: new FormControl(''),
  password: new FormControl(''),
});


  ngOnInit() {
    this.commonUictrl.menuCntrl.enable(false);
  }

  loginValication(){
    this.loginDiv=false;
  }

}
