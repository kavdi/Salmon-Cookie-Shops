'use strict';

var shops = [];
var totals = [];
console.log(totals);
var storeHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function Store(name, minCust, maxCust, avgSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.salesPerHour = [];
  shops.push(this);

  this.cookiesPerHour = function(){
    for (var i = 0; i < storeHours.length; i++){
      var customerPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
      var cookiesPerHour = Math.floor(customerPerHour * this.avgSale);
      this.salesPerHour.push(cookiesPerHour);
    }
  };
  this.totalPerDay = function(){
    this.cookiesPerHour();
    var total = 0;
    for (var c = 0; c < this.salesPerHour.length; c++){
      total += this.salesPerHour[c];
    }
    this.salesPerHour.push(total);
  };
}

new Store('First and Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Cap Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

for (var k = 0; k < shops.length; k++){
  shops[k].totalPerDay();
}

var runIt = function(){
  for (var m = 0; m < shops[0].salesPerHour.length; m++){
    var allCookies = 0;
    for (var w = 0; w < shops.length; w++){
      allCookies += shops[w].salesPerHour[m];
    }
    totals.push(allCookies);
  }
};
runIt();

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
  row.innerText = shops[i].name;
  for (var j = 0; j < shops[i].salesPerHour.length; j++){
    var td = document.createElement('td');
    td.innerText = shops[i].salesPerHour[j];
    row.appendChild(td);
  }
  newtable.appendChild(row);
}
for (var f = -1; f < (totals.length); f++){
  if (f === -1){
    var footerRow = document.createElement('tr');
    footerRow.innerText = 'Hourly Totals';
  }
  else {
    var allstores = document.createElement('td');
    allstores.innerText = totals[f];
    footerRow.appendChild(allstores);
  }
  newtable.appendChild(footerRow);
}
