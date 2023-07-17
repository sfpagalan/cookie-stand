'use strict'

const seattle = {
  location: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  hourlySales: [],
  totalCookies: 0,

    generateRandomCustomers: function() {
        let customers = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
        return customers;
    },

    calculateCookiesPerHour: function() {
        for (let i=6; i<=19; i++) {
            let randomCustomers = this.generateRandomCustomers();
            let cookies = Math.round(randomCustomers * this.avgCookies);
            this.hourlySales.push(`${i}:00: ${cookies} cookies`);
            this.totalCookies += cookies;
        }
        this.hourlySales.push(`Total: ${this.totalCookies} cookies`);
    }
}
seattle.calculateCookiesPerHour();
console.log(seattle.hourlySales);

const seattleSalesList = document.getElementById("seattle-sales");

for (let i=0; i < seattle.hourlySales.length; i++) {
    let saleItem = seattle.hourlySales[i];
    let listItem = document.createElement("li");
    listItem.textContent = saleItem;
    seattleSalesList.appendChild(listItem);
}

const tokyo = {
  location: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  hourlySales: [],
  totalCookies: 0,
  
    generateRandomCustomers: function() {
        let customers = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
        return customers;
    },
  
    calculateCookiesPerHour: function() {
        for (let i=6; i<=19; i++) {
            let randomCustomers = this.generateRandomCustomers();
            let cookies = Math.round(randomCustomers * this.avgCookies);
            this.hourlySales.push(`${i}:00: ${cookies} cookies`);
            this.totalCookies += cookies;
        }
        this.hourlySales.push(`Total: ${this.totalCookies} cookies`);
    }
}
tokyo.calculateCookiesPerHour();
console.log(tokyo.hourlySales);

const tokyoSalesList = document.getElementById("tokyo-sales");

for (let i=0; i < tokyo.hourlySales.length; i++) {
    let saleItem = tokyo.hourlySales[i];
    let listItem = document.createElement("li");
    listItem.textContent = saleItem;
    tokyoSalesList.appendChild(listItem);
}

const dubai = {
  location: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  hourlySales: [],
  totalCookies: 0,
    
    generateRandomCustomers: function() {
        let customers = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
        return customers;
    },
    
    calculateCookiesPerHour: function() {
        for (let i=6; i<=19; i++) {
            let randomCustomers = this.generateRandomCustomers();
            let cookies = Math.round(randomCustomers * this.avgCookies);
            this.hourlySales.push(`${i}:00: ${cookies} cookies`);
            this.totalCookies += cookies;
        }
        this.hourlySales.push(`Total: ${this.totalCookies} cookies`);
    }
}
dubai.calculateCookiesPerHour();
console.log(dubai.hourlySales);

const dubaiSalesList = document.getElementById("dubai-sales");

for (let i=0; i < dubai.hourlySales.length; i++) {
    let saleItem = dubai.hourlySales[i];
    let listItem = document.createElement("li");
    listItem.textContent = saleItem;
    dubaiSalesList.appendChild(listItem);
}  

const paris = {
  location: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  hourlySales: [],
  totalCookies: 0,
    
    generateRandomCustomers: function() {
        let customers = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
        return customers;
    },
    
    calculateCookiesPerHour: function() {
        for (let i=6; i<=19; i++) {
            let randomCustomers = this.generateRandomCustomers();
            let cookies = Math.round(randomCustomers * this.avgCookies);
            this.hourlySales.push(`${i}:00: ${cookies} cookies`);
            this.totalCookies += cookies;
        }
        this.hourlySales.push(`Total: ${this.totalCookies} cookies`);
    }
}
paris.calculateCookiesPerHour();
console.log(paris.hourlySales);

const parisSalesList = document.getElementById("paris-sales");

for (let i=0; i < paris.hourlySales.length; i++) {
    let saleItem = paris.hourlySales[i];
    let listItem = document.createElement("li");
    listItem.textContent = saleItem;
    parisSalesList.appendChild(listItem);
}

const lima = {
  location: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  hourlySales: [],
  totalCookies: 0,
    
    generateRandomCustomers: function() {
        let customers = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
        return customers;
    },
    
    calculateCookiesPerHour: function() {
        for (let i=6; i<=19; i++) {
            let randomCustomers = this.generateRandomCustomers();
            let cookies = Math.round(randomCustomers * this.avgCookies);
            this.hourlySales.push(`${i}:00: ${cookies} cookies`);
            this.totalCookies += cookies;
        }
        this.hourlySales.push(`Total: ${this.totalCookies} cookies`);
    }
}
lima.calculateCookiesPerHour();
console.log(lima.hourlySales);

const limaSalesList = document.getElementById("lima-sales");

for (let i=0; i < lima.hourlySales.length; i++) {
    let saleItem = lima.hourlySales[i];
    let listItem = document.createElement("li");
    listItem.textContent = saleItem;
    limaSalesList.appendChild(listItem);
}