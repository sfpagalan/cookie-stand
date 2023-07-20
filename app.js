// sales.js

function SalmonCookieStand(location, minCustomers, maxCustomers, avgCookies) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.hourlySales = [];
    this.staffingData = [];
  
    this.generateHourlySales = function (hourlyTrafficFactors) {
      let totalCookies = 0;
      for (let hour = 6; hour <= 19; hour++) {
        const scaledCustomers = Math.round(getRandomCustomers(this.minCustomers, this.maxCustomers) * hourlyTrafficFactors[hour - 6]);
        const cookiesSold = Math.round(scaledCustomers * this.avgCookies);
        totalCookies += cookiesSold;
        this.hourlySales.push(cookiesSold);
        this.staffingData.push(Math.ceil(scaledCustomers / 20)); // One Salmon Cookie Tosser can serve 20 customers per hour
      }
      this.hourlySales.push(totalCookies);
    };
  
    this.renderSalesRow = function (tableBody) {
      const row = document.createElement('tr');
      const locationCell = document.createElement('td');
      locationCell.textContent = this.location;
      row.appendChild(locationCell);
  
      for (const cookiesSold of this.hourlySales) {
        const salesCell = document.createElement('td');
        salesCell.textContent = cookiesSold;
        row.appendChild(salesCell);
      }
  
      tableBody.appendChild(row);
    };
  
    this.renderStaffingRow = function (tableBody) {
      const row = document.createElement('tr');
      const locationCell = document.createElement('td');
      locationCell.textContent = this.location;
      row.appendChild(locationCell);
  
      for (const staffNeeded of this.staffingData) {
        const staffCell = document.createElement('td');
        staffCell.textContent = staffNeeded >= 2 ? staffNeeded : '2 (min)';
        row.appendChild(staffCell);
      }
  
      tableBody.appendChild(row);
    };
  }
  
  // Function to get a random number of customers per hour between min and max values
  function getRandomCustomers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  const hourlyTrafficFactors = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];
  
  const shopLocations = [
    new SalmonCookieStand('Seattle', 23, 65, 6.3),
    new SalmonCookieStand('Tokyo', 3, 24, 1.2),
    new SalmonCookieStand('Dubai', 11, 38, 3.7),
    new SalmonCookieStand('Paris', 20, 38, 2.3),
    new SalmonCookieStand('Lima', 2, 16, 4.6),
  ];
  
  // Generate hourly sales and staffing data for each location
  for (const location of shopLocations) {
    location.generateHourlySales(hourlyTrafficFactors);
  }
  
  function renderSalesTable() {
    const tableBody = document.getElementById('sales-table').getElementsByTagName('tbody')[0];
  
    for (const location of shopLocations) {
      location.renderSalesRow(tableBody);
    }
  
    const footerRow = document.createElement('tr');
    const footerCell = document.createElement('td');
    footerCell.textContent = 'Hourly Total';
    footerRow.appendChild(footerCell);
  
    let grandTotal = 0;
    for (let hour = 6; hour <= 19; hour++) {
      let hourlyTotal = 0;
      for (const location of shopLocations) {
        hourlyTotal += location.hourlySales[hour - 6];
      }
      const totalCell = document.createElement('td');
      totalCell.textContent = hourlyTotal;
      footerRow.appendChild(totalCell);
      grandTotal += hourlyTotal;
    }
  
    const grandTotalCell = document.createElement('td');
    grandTotalCell.textContent = grandTotal;
    footerRow.appendChild(grandTotalCell);
  
    tableBody.appendChild(footerRow);
  }
  
  function renderStaffingTable() {
    const tableBody = document.getElementById('staffing-table').getElementsByTagName('tbody')[0];
  
    for (const location of shopLocations) {
      location.renderStaffingRow(tableBody);
    }
  }
  
  renderSalesTable();
  renderStaffingTable();
  