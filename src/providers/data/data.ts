import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  myFoodList: any = [
      {
          header: "Appetizers",
          menuItems: [
              {
                  item: "Egg Rolls",
                  cost: "$1.99",
                  amount: "2 Eggrolls"
              },
              {
                  item: "Crab Rangoons",
                  cost: "$2.99",
                  amount: "4 rangoons"
              },
              {
                  item: "Shrimp Dumplings",
                  cost: "$4.50",
                  amount: "4 dumplings"
              }
          ]
      },
      {
          header: "Soups",
          menuItems: [
              {
                  item: "Egg Drop",
                  cost: "$2.99/3.99",
                  amount: "small/large"
              },
              {
                  item: "Hot & Sour",
                  cost: "$2.99/3.99",
                  amount: "small/large"
              },
              {
                  item: "Hot Wanton",
                  cost: "$2.99/3.99",
                  amount: "small/large"
              }
          ]
      },
      {
          header: "Dinner Entrée",
          menuItems: [
              {
                  item: "Ma Po Tofu",
                  cost: "$8.99",
                  size: "Dinner"
              },
              {
                  item: "Cumin Chicken Wings",
                  cost: "$9.99",
                  amount: "Dinner"
              },
              {
                  item: "Beef Hot Pot",
                  cost: "$11.50",
                  amount: "Dinner"
              }
          ]
      }

  ]

  constructor() {
    console.log('Hello DataProvider Provider');
  }


}
