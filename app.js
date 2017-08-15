'use strict';
function store(name, minCust, maxCust, avgSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
}
var storeOne = new store('First and Pike', 23, 65, 6.3);
var storeTwo = new store('Seatac Airport', 3, 24, 1.2);
var storeThree = new store('Seattle Center', 11, 38, 3.7);
var storeFour = new store('Cap Hill', 20, 38, 2.3);
var storeFive = new store('Alki', 2, 16, 4.6);

var salesPerHour = [];
console.log(salesPerHour);
var totalSalesPerHour = [];
var totalSales = [];

var body = document.getElementsByTagName('body')[0];
var newtable = document.createElement('table');
var shop = [storeOne, storeTwo, storeThree, storeFour, storeFive];
for (var i = 0; i < shop.lenght; i++);
body.appendChild(newtable);

for (var t = -1; t < 15; t++){
  if (t === -1){
    var time = 'Location';
  } else if (t < 6){
    var time = (t + 6) + 'am';
  } else if (t === 6){
    var time = '12pm';
  } else if (t === 14){
    var time = 'Total Sales';
  } else {
    var time = (t - 6) + 'pm';}
  var timeHeading = document.createElement('th');
  timeHeading.innerText = time;
  newtable.appendChild(timeHeading);
}
console.log(shop);
for (var i = 0; i < shop.length; i++){
  var newRow = document.createElement('tr');
  newRow.innerText = shop[i].name;
  newtable.appendChild(newRow);
}
