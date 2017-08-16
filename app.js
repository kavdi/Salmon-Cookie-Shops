'use strict';

var storeOne = new stores('First and Pike', 23, 65, 6.3);
var storeTwo = new stores('Seatac Airport', 3, 24, 1.2);
var storeThree = new stores('Seattle Center', 11, 38, 3.7);
var storeFour = new stores('Cap Hill', 20, 38, 2.3);
var storeFive = new stores('Alki', 2, 16, 4.6);
var shops = ['First and Pike', 'Seatac Airport', 'Seattle Center', 'Cap Hill', 'Alki'];
var storeHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var salesPerHour = [];
var totalPerStore = [];
function stores(name, minCust, maxCust, avgSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  var cookiesPerHour = function(){
    for (var i = 0; i < storeHours.length; i++){
      if (i < storeHours.length - 1){
        var customerPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
        var cookiesPerHour = Math.floor(customerPerHour * this.avgSale);
        salesPerHour.push(cookiesPerHour);
      }
      else {
        var cookiesPerStore = function() {
          var cookies = 0;
          for (var c = 0; c < salesPerHour.length; c++);
          var cookies = cookies += salesPerHour[c];
          totalPerStore.push(cookies);
        };
      }

    };
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

for (var i = 0; i < shops.length; i++){
  var row = document.createElement('tr');
  row.innerText = shops[i];
  for (var j = 0; j < storeHours.length; j++){
    if (j <= storeHours.length - 1) {
      var td = document.createElement('td');
      td.innerText = salesPerHour[j];
      row.appendChild(td);
    }
    else {
      var total = document.createElement('td');
      td.innerText = totalPerStore[j];
    }

  }
  newtable.appendChild(row);
}
