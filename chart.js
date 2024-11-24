// Chart.js implementation for rendering the chart
function renderChart(data) {
    const ctx = document.getElementById('data-chart').getContext('2d');
  
    console.log("Rendering chart with data:", data);
  
    const chartData = {
      labels: data.map(item => item.date),
      datasets: [{
        label: 'Data Values',
        data: data.map(item => item.value),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      }],
    };
  
    new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
        scales: {
          x: { 
            title: { text: 'Date', display: true },
          },
          y: { 
            title: { text: 'Value', display: true },
          },
        },
      },
    });
  }
  