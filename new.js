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
        this.staffingData.push(Math.ceil(scaledCustomers / 20));
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
  
  function handleFormSubmission(event) {
    event.preventDefault();
  
    const location = event.target.location.value;
    const minCustomers = parseInt(event.target["min-customers"].value);
    const maxCustomers = parseInt(event.target["max-customers"].value);
    const avgCookies = parseFloat(event.target["avg-cookies"].value);
  
    const newCookieStand = new SalmonCookieStand(location, minCustomers, maxCustomers, avgCookies);
  
    newCookieStand.generateHourlySales(hourlyTrafficFactors);
  
    const salesTableBody = document.getElementById('sales-table').getElementsByTagName('tbody')[0];
    newCookieStand.renderSalesRow(salesTableBody);
  
    updateFooterRow();
  
    const staffingTableBody = document.getElementById('staffing-table').getElementsByTagName('tbody')[0];
    newCookieStand.renderStaffingRow(staffingTableBody);
  
    event.target.reset();
  }
  
  const form = document.getElementById("cookie-stand-form");
  form.addEventListener("submit", handleFormSubmission);
  
  function updateFooterRow() {
    const footerRow = document.querySelector("#sales-table tfoot tr");
    footerRow.innerHTML = "";
  
    const footerCell = document.createElement("td");
    footerCell.textContent = "Totals";
    footerRow.appendChild(footerCell);
  
    let totalCookiesPerHour = Array(14).fill(0);

    for (const location of shopLocations) {
      for (let i = 0; i < location.hourlySales.length; i++) {
        totalCookiesPerHour[i] += location.hourlySales[i];
      }
    }
  
    for (const cookies of totalCookiesPerHour) {
      const footerCell = document.createElement("td");
      footerCell.textContent = cookies;
      footerRow.appendChild(footerCell);
    }
  }
  
  renderSalesTable();
  renderStaffingTable();
