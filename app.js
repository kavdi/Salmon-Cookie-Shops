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

var shop = [storeOne, storeTwo, storeThree, storeFour, storeFive];
var body = document.getElementsByTagName('body')[0];

for (var i = 0; i < shop.lenght; i++);
var ulTag = document.createElement('ul') * shop[i];
body.apendchild(ulTag);
var liTag = document.createElement('li') * shop[i];
ul.apendchild(liTag);
var customerPerHour = Math.floor(Math.random() * (shop[i].maxCust - shop[i].minCust[i]) + shop[i].minCust);
console.log(customerPerHour);
var cookiesPerHour = customersPerHour * shop[i].avgSale;
console.log(cookiesPerHour);
