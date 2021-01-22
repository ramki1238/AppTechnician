import { Component, OnInit } from '@angular/core';
import { ItemProvidersService } from '../../providers/item-providers.service';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.page.html',
  styleUrls: ['./itemdetail.page.scss'],
})
export class ItemdetailPage implements OnInit {

  statesdata: StatesDatabase[];
  districtsata: DistrictDatabase[];
  citysdata: CityDatabase[];

  fromstatesData: StatesDatabase[];
  fromDistrictData: DistrictDatabase[];
  fromcityData: CityDatabase[];

  tostatesData: StatesDatabase[];
  toDistrictData: DistrictDatabase[];
  tocityData: CityDatabase[];

  constructor(public itmprservices: ItemProvidersService) {
  }
  ngOnInit() {
    this.getStatesData();
  }
  getStatesData() {
    this.itmprservices.getStatesData().subscribe(data => {
      this.statesdata = (JSON.parse(data.substring(2, data.length))).body;
      this.fromstatesData = this.tostatesData = this.statesdata;

    });
    this.itmprservices.getDistrictData().subscribe(data => this.districtsata = (JSON.parse(data.substring(2, data.length))).body);
    this.itmprservices.getCityData().subscribe(data => this.citysdata = (JSON.parse(data.substring(2, data.length))).body);
  }

  dataChange(area, event) {
    let selectedValueis = event.target.value;
    console.log(selectedValueis);
    console.log(this.districtsata);
    console.log(this.fromDistrictData);

    switch (area) {
      case 'fromstate':
        this.fromDistrictData = null;;
        this.fromcityData = null;
        this.fromDistrictData = this.districtsata.filter(resdata => resdata.stateid == selectedValueis);
        break;
      case 'fromdistrict':
        this.fromcityData = null;
        this.fromcityData = this.citysdata.filter(resdata => resdata.distid == selectedValueis);
        break;
      case 'tostate':
        this.toDistrictData = null;;
        this.tocityData = null;
        this.toDistrictData = this.districtsata.filter(resdata => resdata.stateid == selectedValueis);
        break;
      case 'todistrict':
        this.tocityData = null;
        this.tocityData = this.citysdata.filter(resdata => resdata.distid == selectedValueis);
        break;
    }
  }

}

