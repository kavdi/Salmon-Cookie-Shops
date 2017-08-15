'use strict';

var storeOne = {
  name:'First and Pike',
  minCust:'23',
  maxCust:'65',
  avgSale:'6.3'
};

var storeTwo = {
  name:'Seatac Airport',
  minCust:'3',
  maxCust:'24',
  avgSale:'1.2'
};

var storeThree = {
  name:'Seattle Center',
  minCust:'11',
  maxCust:'38',
  avgSale:'3.7'
};

var storeFour = {
  name:'Cap Hill',
  minCust:'20',
  maxCust:'38',
  avgSale:'2.3'
};

var storeFive = {
  name:'Alki',
  minCust:'2',
  maxCust:'16',
  avgSale:'4.6'
};

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
  for (var y = 0; y < 15; y++){
    if (y < 14){
      var customerPerHour = Math.floor(Math.random() * (shop[i].maxCust - shop[i].minCust[i]) + shop[i].minCust);
      var cookiesPerHour = Math.floor(customerPerHour * shop[i].avgSale);
      salesPerHour.push(cookiesPerHour);
      var newdata = document.createElement('td');
      newdata.innerText = cookiesPerHour;
      newRow.appendChild(newdata);
    }
  }
    // else {
    //   var newdata = document.createElement('td');
    //   newdata.innerText = totalSales;
    //   newdata.appendChild(newRow);
    // }
}
