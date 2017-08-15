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

var body = document.getElementsByTagName('body')[0];
var newtable = document.createElement('table');
var shop = [storeOne, storeTwo, storeThree, storeFour, storeFive];
for (var i = 0; i < shop.lenght; i++);
body.appendChild(newtable);

for (var t = -1; t < 15; t++){
  if (t === -1){
    var time = 'Store Name';
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

for (var i = 0; i < shop.lenght; i++);{
  var newRow = document.createElement('tr');
  newRow.innerText = shop[i].name;
  newtable.appendChild(newRow);
  for (var t = 0; t < 15; t++){
    if (t < 14){
      var customerPerHour = Math.floor(Math.random() * (shop[i].maxCust - shop[i].minCust[i]) + shop[i].minCust);
      console.log(customerPerHour);
      var cookiesPerHour = Math.floor(customerPerHour * shop[i].avgSale);
      console.log(cookiesPerHour);
      var newdata = document.createElement('td');
      newdata.innerText = cookiesPerHour;
      newdata.appendChild(newRow);
    } else {
      var time = 0;
    }
  }
}
