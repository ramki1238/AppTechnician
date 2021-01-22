import { Component } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { CommonUiControlService } from '../app/providers/common-ui-control.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuCtrl: MenuController,
    private commonuiCtrl: CommonUiControlService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  ngOnInit() {
    this.checkLogin();
  }
  async checkLogin() {
    // await this.commonuiCtrl.isLogin() == true ? this.router.navigate(['dashboardpage']) : this.router.navigate(['welcomeslider']);
  }
  RedirectToPage(pageis) {
    this.router.navigate([pageis]);
    this.menuCtrl.close();
  }
  logout() {
    this.commonuiCtrl.doLogOut();
  }

}
