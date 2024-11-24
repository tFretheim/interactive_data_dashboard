// Global data state
let allData = []; // Stores all data

// Fetch and process data from API (or mock data for now)
async function fetchData() {
  try {
    // Show loading spinner
    console.log("Fetching data...");
    document.querySelector('#loading-spinner').style.display = 'block';

    // Simulate fetching mock data
    const response = await fetch('data/mockData.json'); // Make sure path is correct
    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();

    // Store the fetched data
    allData = data;
    console.log("Data fetched:", allData);

    // Hide loading spinner
    document.querySelector('#loading-spinner').style.display = 'none';

    // Initially render the data
    renderDataTable(data);
    renderChart(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    document.querySelector('#loading-spinner').style.display = 'none';
  }
}

// Render data in table
function renderDataTable(data) {
  const tableBody = document.querySelector('#data-table tbody');
  tableBody.innerHTML = '';  // Clear existing rows

  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.date}</td>
      <td>${item.category}</td>
      <td>${item.value}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Toggle theme between light and dark
document.querySelector('#toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Apply date range filter
document.querySelector('#apply-filter').addEventListener('click', () => {
  const startDate = document.querySelector('#start-date').value;
  const endDate = document.querySelector('#end-date').value;

  if (startDate && endDate) {
    const filteredData = filterDataByDateRange(startDate, endDate);
    renderDataTable(filteredData);
    renderChart(filteredData);
  }
});

// Function to filter data by the selected date range
function filterDataByDateRange(startDate, endDate) {
  return allData.filter(item => item.date >= startDate && item.date <= endDate);
}

// Fetch data initially
fetchData();  
