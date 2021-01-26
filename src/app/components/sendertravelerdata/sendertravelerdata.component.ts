import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CommonUiControlService } from 'src/app/providers/common-ui-control.service';
import { ItemProvidersService } from 'src/app/providers/item-providers.service';

@Component({
  selector: 'app-sendertravelerdata',
  templateUrl: './sendertravelerdata.component.html',
  styleUrls: ['./sendertravelerdata.component.scss'],
})
export class SendertravelerdataComponent implements OnInit {
  @Input('itemsData') itemsData
  isSender=false;
  constructor(private itemprovider: ItemProvidersService,
    private commonUictrl: CommonUiControlService) {
    
  }

  ngOnInit() {


  }
  

}
