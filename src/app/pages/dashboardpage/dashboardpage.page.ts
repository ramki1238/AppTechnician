import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { CommonUiControlService } from 'src/app/providers/common-ui-control.service';
import { ItemProvidersService } from 'src/app/providers/item-providers.service';
import * as moment from 'moment';


@Component({
  selector: 'app-dashboardpage',
  templateUrl: './dashboardpage.page.html',
  styleUrls: ['./dashboardpage.page.scss'],
})
export class DashboardpagePage implements OnInit {
  pagetitle = "Home"
  userid: string;
  typeOfuser: string;
  typeOfuserDataNeed: string;
  todaydate = moment(new Date(), 'YYYY-MM-DD').format("YYYY-MM-DD");
  itemsListData: UserDatabase
  constructor(public menu: MenuController,
    private itemprovider: ItemProvidersService,
    private commonUictrl: CommonUiControlService,
    public loadingController: LoadingController) {
    this.commonUictrl.menuCntrl.enable(true, 'custom');
    if (!this.commonUictrl.menuCntrl.isEnabled) this.commonUictrl.menuCntrl.enable(true);
  }

  ngOnInit() {
    this.getuserData();

  }

  async getuserData() {
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    await this.commonUictrl.getUserId().then((user) => {
      this.userid = user;
    });
    await this.commonUictrl.getTypeOfUser().then((user) => {
      this.typeOfuser = user;
      switch (this.typeOfuser.toLowerCase()) {
        case 'traveler':
          this.typeOfuserDataNeed = "sender";
          break;
        case 'sender':
          this.typeOfuserDataNeed = "traveler";
          break;
      }
      this.getMainItemsStatus();
      loading.dismiss();
    });
  }


  async getMainItemsStatus() {
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    this.itemprovider.getMainItemsStatus(this.typeOfuserDataNeed, this.todaydate).subscribe(data => {
      console.log(data);
      if (data.status == 1)
        this.getUsersList();
    });
    loading.dismiss();
  }

  async getUsersList() {
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    this.itemprovider.getUsersList(this.typeOfuserDataNeed, this.todaydate).subscribe(data => {
      if (data != null)
        this.itemsListData = data;
    });
    loading.dismiss();
  }

  doRefresh(event) {
    this.getuserData();
    event.target.complete();
  }

}
