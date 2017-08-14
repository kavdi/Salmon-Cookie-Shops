'use strict';

storeOne = {
  name:'First and Pike',
  minCust:'23',
  maxCust:'65',
  avgSale:'6.3'
};

storeTwo = {
  name:'Seatac Airport',
  minCust:'3',
  maxCust:'24',
  avgSale:'1.2'
};

storeThree = {
  name:'Seattle Center',
  minCust:'11',
  maxCust:'38',
  avgSale:'3.7'
};

storeFour = {
  name:'Cap Hill',
  minCust:'20',
  maxCust:'38',
  avgSale:'2.3'
};

storeFive = {
  name:'Alki',
  minCust:'2',
  maxCust:'16',
  avgSale:'4.6'
};

var shop = ['First and Pike', 'Seatac Airport', 'Seattle Center', 'Cap Hill', 'Alki']
var body = document.getElementsByTagName('body')[0];

for (var i = 0; i < shop.lenght; i++)
for

var customerPerHour = Math.floor(Math.random() * (shop[i].maxCust - shop[i].minCust[i]) + shop[i].minCust);
