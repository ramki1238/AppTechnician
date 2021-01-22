import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CommonUiControlService {

  constructor(public menuCntrl: MenuController,
    public navCtrl: Router,
    private storage: Storage,
    public alertController: AlertController,
    public loadingController: LoadingController) { }


  async saveTypeOfUser(usertype) {
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    await this.storage.set("typeofuser", usertype);
    this.presentAlert("Success", "You logged in as " + usertype, ['Ok']);
    this.navCtrl.navigate(['dashboardpage']);
    loading.dismiss();
  }
  async getTypeOfUser() {
    await this.storage.get("typeofuser").then((useris) => {
      return useris;
    });
  }
  async doLogOut() {
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    await this.storage.clear();
    this.navCtrl.navigate(['welcomeslider']);
    loading.dismiss();
  }
  async isLogin() {
    var islogin1 = false;
    await this.storage.get("logindata").then((data) => {
      if (data.username == null || data.username == '' || data.username == undefined || data.username.length == 0) {
        islogin1 = false;
      }
      else {
        islogin1 = true;
      }
    }).catch((err) => {
    });
    return islogin1;
  }
  async saveLogin(userData) {
    await this.storage.set("logindata", userData).then(() => {
      console.log("success");
      this.navCtrl.navigate(['dashboardpage']);
    }).catch((ex) => {
      console.log(ex);
    })
  }
  async presentAlert(subheader, message, buttons) {
    const alert = await this.alertController.create({
      subHeader: subheader,
      message: message,
      buttons: buttons
    });

    await alert.present();
  }

}
