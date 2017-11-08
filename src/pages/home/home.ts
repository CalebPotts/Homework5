import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  menulists:any;

  constructor(public navCtrl: NavController, public data: DataProvider) {
  }

  ionViewDidLoad(){
    this.menulists = this.data.myFoodList;
  }

  itemClicked(item):void {
    this.navCtrl.push('InfoPage', item);
  }


}
