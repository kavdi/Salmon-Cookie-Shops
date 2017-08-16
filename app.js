'use strict';

var storeOne = new stores('First and Pike', 23, 65, 6.3);
var storeTwo = new stores('Seatac Airport', 3, 24, 1.2);
var storeThree = new stores('Seattle Center', 11, 38, 3.7);
var storeFour = new stores('Cap Hill', 20, 38, 2.3);
var storeFive = new stores('Alki', 2, 16, 4.6);
var locations = [storeOne, storeTwo, storeThree, storeFour, storeFive];
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var salesPerHour = [];

function stores(name, minCust, maxCust, avgSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  var cookiesPerHour = function(){
    for (var i = 0; i < storeHours.length; i++){
      var customerPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
      var cookiesPerHour = Math.floor(customerPerHour * this.avgSale);
      salesPerHour.push(cookiesPerHour);

    };console.log(cookiesPerHour);
  };
}

var body = document.getElementsByTagName('body')[0];
var newtable = document.createElement('table');
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

for (var i = 0; i < locations.length; i++){
  var row = document.createElement('tr');

  for (var j = 0; j < storeHours.lenght; j++){
    var td = document.createElement('td');
    td.innerText = locations[i].salesPerHour[j];
    row.appendChild(td);
  }
  newtable.appendChild(row);
}
