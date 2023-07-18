'use strict'

// const seattle = {
//   location: 'Seattle',
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookies: 6.3,
//   hourlySales: [],
//   totalCookies: 0,

//     generateRandomCustomers: function() {
//         let customers = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//         return customers;
//     },

//     calculateCookiesPerHour: function() {
//         for (let i=6; i<=19; i++) {
//             let randomCustomers = this.generateRandomCustomers();
//             let cookies = Math.round(randomCustomers * this.avgCookies);
//             this.hourlySales.push(`${i}:00: ${cookies} cookies`);
//             this.totalCookies += cookies;
//         }
//         this.hourlySales.push(`Total: ${this.totalCookies} cookies`);
//     }
// }
// seattle.calculateCookiesPerHour();
// console.log(seattle.hourlySales);

// const seattleSalesList = document.getElementById("seattle-sales");

// for (let i=0; i < seattle.hourlySales.length; i++) {
//     let saleItem = seattle.hourlySales[i];
//     let listItem = document.createElement("li");
//     listItem.textContent = saleItem;
//     seattleSalesList.appendChild(listItem);
// }

// const tokyo = {
//   location: 'Tokyo',
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookies: 1.2,
//   hourlySales: [],
//   totalCookies: 0,
  
//     generateRandomCustomers: function() {
//         let customers = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//         return customers;
//     },
  
//     calculateCookiesPerHour: function() {
//         for (let i=6; i<=19; i++) {
//             let randomCustomers = this.generateRandomCustomers();
//             let cookies = Math.round(randomCustomers * this.avgCookies);
//             this.hourlySales.push(`${i}:00: ${cookies} cookies`);
//             this.totalCookies += cookies;
//         }
//         this.hourlySales.push(`Total: ${this.totalCookies} cookies`);
//     }
// }
// tokyo.calculateCookiesPerHour();
// console.log(tokyo.hourlySales);

// const tokyoSalesList = document.getElementById("tokyo-sales");

// for (let i=0; i < tokyo.hourlySales.length; i++) {
//     let saleItem = tokyo.hourlySales[i];
//     let listItem = document.createElement("li");
//     listItem.textContent = saleItem;
//     tokyoSalesList.appendChild(listItem);
// }

// const dubai = {
//   location: 'Dubai',
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookies: 3.7,
//   hourlySales: [],
//   totalCookies: 0,
    
//     generateRandomCustomers: function() {
//         let customers = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//         return customers;
//     },
    
//     calculateCookiesPerHour: function() {
//         for (let i=6; i<=19; i++) {
//             let randomCustomers = this.generateRandomCustomers();
//             let cookies = Math.round(randomCustomers * this.avgCookies);
//             this.hourlySales.push(`${i}:00: ${cookies} cookies`);
//             this.totalCookies += cookies;
//         }
//         this.hourlySales.push(`Total: ${this.totalCookies} cookies`);
//     }
// }
// dubai.calculateCookiesPerHour();
// console.log(dubai.hourlySales);

// const dubaiSalesList = document.getElementById("dubai-sales");

// for (let i=0; i < dubai.hourlySales.length; i++) {
//     let saleItem = dubai.hourlySales[i];
//     let listItem = document.createElement("li");
//     listItem.textContent = saleItem;
//     dubaiSalesList.appendChild(listItem);
// }  

// const paris = {
//   location: 'Paris',
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgCookies: 2.3,
//   hourlySales: [],
//   totalCookies: 0,
    
//     generateRandomCustomers: function() {
//         let customers = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//         return customers;
//     },
    
//     calculateCookiesPerHour: function() {
//         for (let i=6; i<=19; i++) {
//             let randomCustomers = this.generateRandomCustomers();
//             let cookies = Math.round(randomCustomers * this.avgCookies);
//             this.hourlySales.push(`${i}:00: ${cookies} cookies`);
//             this.totalCookies += cookies;
//         }
//         this.hourlySales.push(`Total: ${this.totalCookies} cookies`);
//     }
// }
// paris.calculateCookiesPerHour();
// console.log(paris.hourlySales);

// const parisSalesList = document.getElementById("paris-sales");

// for (let i=0; i < paris.hourlySales.length; i++) {
//     let saleItem = paris.hourlySales[i];
//     let listItem = document.createElement("li");
//     listItem.textContent = saleItem;
//     parisSalesList.appendChild(listItem);
// }

// const lima = {
//   location: 'Lima',
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookies: 4.6,
//   hourlySales: [],
//   totalCookies: 0,
    
//     generateRandomCustomers: function() {
//         let customers = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//         return customers;
//     },
    
//     calculateCookiesPerHour: function() {
//         for (let i=6; i<=19; i++) {
//             let randomCustomers = this.generateRandomCustomers();
//             let cookies = Math.round(randomCustomers * this.avgCookies);
//             this.hourlySales.push(`${i}:00: ${cookies} cookies`);
//             this.totalCookies += cookies;
//         }
//         this.hourlySales.push(`Total: ${this.totalCookies} cookies`);
//     }
// }
// lima.calculateCookiesPerHour();
// console.log(lima.hourlySales);

// const limaSalesList = document.getElementById("lima-sales");

// for (let i=0; i < lima.hourlySales.length; i++) {
//     let saleItem = lima.hourlySales[i];
//     let listItem = document.createElement("li");
//     listItem.textContent = saleItem;
//     limaSalesList.appendChild(listItem);
// }

function Store(location, minCustomers, maxCustomers, avgCookies) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.hourlySales = []; //needs to be empty since i dont have the answer yet.
    this.totalCookies = 0; //needs to be zero basically to start the total.
  
    this.calculateCookiesPerHour = function() { //this function helps determine the number of cookies sold for each hour of the day at a specific CSL. I'm using military time for better calculations.
        for (let i = 6; i <= 19; i++) { //this for loop will generate a random number of customer who visit the cookie stand.
            let randomCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers; //did this to calculate the customers
            let cookies = Math.round(randomCustomers * this.avgCookies); //did this to get a number of cookies sold by multiplying it to the number of customer above.
            this.hourlySales.push(cookies); //pushes or adds the number of cookies sold for the hour.
            this.totalCookies += cookies; //this will just track the total number of cookies sold throughout the day. will be using this to calculate the total later for the table.
        }
    }
  
    this.table = function() {
        const tableRow = document.createElement("tr"); //will create new table row and the container for the data of cookie stand location. this will create a row in a table that will hold the data for the CSL(cookie stand location).
        const tableDataLocation = document.createElement("td"); //this will create a box within the row to display the names of the location.
        tableDataLocation.textContent = this.location; //will set the location of the text content to location property or basically this will put the name of the location inside the box.
        tableRow.appendChild(tableDataLocation); //appends the tableDataLocation element as a child to the tableRow element. this will add the location data to the row.
  
        for (let i = 0; i < this.hourlySales.length; i++) {
            const tableData = document.createElement("td"); //will create a new data in <tr> for each hour of sales data and creates a box for each of the hours sales data.
            tableData.textContent = this.hourlySales[i]; //will set the text content of tableData element to the sales data for current hour? or put the data or number of cookies sold during the current hour.
            tableRow.appendChild(tableData); //appends tableData element as a child of the tableRow. this will add sales data for each hour to the row.
        } //this for loop will repeat the process of inserting data for the hours of the say and number of cookies sold until all boxes are filled? maybe..
  
        const tableDataTotal = document.createElement("td"); //will create data element <td> and will be used to display the total number of cookies for the cookie stand location. basically will make another box to put the total number of cookies sold for the CSL throughout the day.
        tableDataTotal.textContent = this.totalCookies; //sets the text content of tableDataTotal element to the total number of cookies for the cookie stand location and adds the total number of cookies to this box.
        tableRow.appendChild(tableDataTotal); //appends tableDataTotal element as a child to the tableRow and will add the total number of cookies to the table row. or just means that the data will be inserted to the last box?
    
        return tableRow; //will return the tableRow element that represents the complete sales data for the CSL. basically this will return the complete row will all the data so it will appear to the table.
    }
}
  
    const seattle = new Store("Seattle", 23, 65, 6.3);
    const tokyo = new Store("Tokyo", 3, 24, 1.2);
    const dubai = new Store("Dubai", 11, 38, 3.7);
    const paris = new Store("Paris", 20, 38, 2.3);
    const lima = new Store("Lima", 2, 16, 4.6);
    //this formula or i forgot what the term is creates intances or object(??) to put the min number of customers, max number of customers, and avg cookies purchased.
    //adding 'new' next to the object Store creates a new Store object or like a inheritance(?) so that i don't have to keep making a prototype(?) 
    const stores = [seattle, tokyo, dubai, paris, lima]; //made this array to store the variable 'stores' which has all the instances of Store like seattle etc...
    
    const salesTableElement = document.getElementById("sales-table"); //the variable salesDataElement is used as a reference to be used in HTML like the method getElementId will search my page for the information i insert for this purpose the (sales-data) which will then return the data.
  
    for (let i = 0; i < stores.length; i++) { //this is another for loop. i is the variable and the 0 is the index in my array.
        const store = stores[i]; //this will run my locations one at a time. store=locations and i is the variable above.
        store.calculateCookiesPerHour(); //this will calculate the sales data for each hour at the store location.
        const tableRow = store.table(); //calls the data render from above to the current store.
        salesTableElement.appendChild(tableRow); //appends the tableRow to the salesDataElement and basically inserts the data to the boxes.
    }

    const totalHourlySales = [];
    for (let i = 0; i < stores[0].hourlySales.length; i++) {
        let total = 0;
        for (let j = 0; j < stores.length; j++) {
            total += stores[j].hourlySales[i];
        }
        totalHourlySales.push(total);
    }

    const tableRowTotalSales = document.createElement("tr");
    const tableDataTotalLabel = document.createElement("td");
    tableDataTotalLabel.textContent = "Total Sales";
    tableRowTotalSales.appendChild(tableDataTotalLabel);

    for (let i = 0; i < totalHourlySales.length; i++) {
        const tableData = document.createElement("td");
        tableData.textContent = totalHourlySales[i];
        tableRowTotalSales.appendChild(tableData);
    }

    salesTableElement.appendChild(tableRowTotalSales);
