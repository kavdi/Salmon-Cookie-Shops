'use strict';

var pike = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  simCookies: [],
  totalCookieSales: 0,
  randomCustomersPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  salesPerHour: function(){
    this.simCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0; i < this.storeHours.length; i++) {
      var hourlyCookieSales = Math.ceil(this.avgCookies * this.randomCustomersPerHour());
      this.simCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  },
  dailySalesReport: function(){
    this.salesPerHour();
    var location = document.getElementById('sales-section');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    location.appendChild(locationName);

    var list = document.createElement('ul');
    location.appendChild(list);

    for (var i = 0; i < this.storeHours.length; i++) {
      var listItems = document.createElement('li');
      listItems.innerText = this.storeHours[i] + ': ' + this.simCookies[i] + ' cookies';
      list.appendChild(listItems);
    }
    var listItems = document.createElement('li');
    listItems.innerText = 'Total: ' + this.totalCookieSales + ' cookies';
    list.appendChild(listItems);
  }
};
var seatac = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  simCookies: [],
  totalCookieSales: 0,
  randomCustomersPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  salesPerHour: function(){
    this.simCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0; i < this.storeHours.length; i++) {
      var hourlyCookieSales = Math.ceil(this.avgCookies * this.randomCustomersPerHour());
      this.simCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  },
  dailySalesReport: function(){
    this.salesPerHour();
    var location = document.getElementById('sales-section');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    location.appendChild(locationName);

    var list = document.createElement('ul');
    location.appendChild(list);

    for (var i = 0; i < this.storeHours.length; i++) {
      var listItems = document.createElement('li');
      listItems.innerText = this.storeHours[i] + ': ' + this.simCookies[i] + ' cookies';
      list.appendChild(listItems);
    }
    var listItems = document.createElement('li');
    listItems.innerText = 'Total: ' + this.totalCookieSales + ' cookies';
    list.appendChild(listItems);
  }
};
var seattleCenter = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  simCookies: [],
  totalCookieSales: 0,
  randomCustomersPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  salesPerHour: function(){
    this.simCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0; i < this.storeHours.length; i++) {
      var hourlyCookieSales = Math.ceil(this.avgCookies * this.randomCustomersPerHour());
      this.simCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  },
  dailySalesReport: function(){
    this.salesPerHour();
    var location = document.getElementById('sales-section');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    location.appendChild(locationName);

    var list = document.createElement('ul');
    location.appendChild(list);

    for (var i = 0; i < this.storeHours.length; i++) {
      var listItems = document.createElement('li');
      listItems.innerText = this.storeHours[i] + ': ' + this.simCookies[i] + ' cookies';
      list.appendChild(listItems);
    }
    var listItems = document.createElement('li');
    listItems.innerText = 'Total: ' + this.totalCookieSales + ' cookies';
    list.appendChild(listItems);
  }
};
var capitol = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  simCookies: [],
  totalCookieSales: 0,
  randomCustomersPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  salesPerHour: function(){
    this.simCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0; i < this.storeHours.length; i++) {
      var hourlyCookieSales = Math.ceil(this.avgCookies * this.randomCustomersPerHour());
      this.simCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  },
  dailySalesReport: function(){
    this.salesPerHour();
    var location = document.getElementById('sales-section');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    location.appendChild(locationName);

    var list = document.createElement('ul');
    location.appendChild(list);

    for (var i = 0; i < this.storeHours.length; i++) {
      var listItems = document.createElement('li');
      listItems.innerText = this.storeHours[i] + ': ' + this.simCookies[i] + ' cookies';
      list.appendChild(listItems);
    }
    var listItems = document.createElement('li');
    listItems.innerText = 'Total: ' + this.totalCookieSales + ' cookies';
    list.appendChild(listItems);
  }
};
var alki = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  simCookies: [],
  totalCookieSales: 0,
  randomCustomersPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  salesPerHour: function(){
    this.simCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0; i < this.storeHours.length; i++) {
      var hourlyCookieSales = Math.ceil(this.avgCookies * this.randomCustomersPerHour());
      this.simCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  },
  dailySalesReport: function(){
    this.salesPerHour();
    var location = document.getElementById('sales-section');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    location.appendChild(locationName);

    var list = document.createElement('ul');
    location.appendChild(list);

    for (var i = 0; i < this.storeHours.length; i++) {
      var listItems = document.createElement('li');
      listItems.innerText = this.storeHours[i] + ': ' + this.simCookies[i] + ' cookies';
      list.appendChild(listItems);
    }
    var listItems = document.createElement('li');
    listItems.innerText = 'Total: ' + this.totalCookieSales + ' cookies';
    list.appendChild(listItems);
  }
};

var stores = [pike, seatac, seattleCenter, capitol, alki];

for (var i = 0; i < stores.length; i++) {
  stores[i].dailySalesReport();
}
