// JavaScript file
// Get references to the elements
const updateButton = document.getElementById('updateChart');
const dataValueInput = document.getElementById('dataValue');
const ctx = document.getElementById('myChart').getContext('2d');

// Initial data for the chart
let chartData = [25, 30, 35, 40, 45];

// Create the chart using Chart.js
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [{
      label: 'Data Values',
      data: chartData,
      backgroundColor: '#ff7a18',
      borderColor: '#af002d',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10
        }
      }
    },
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    }
  }
});

// Function to update the chart with the new data
updateButton.addEventListener('click', () => {
  const newDataValue = Number(dataValueInput.value);

  if (newDataValue >= 0 && newDataValue <= 100) {
    // Add the new value to the chart data
    chartData.push(newDataValue);
    if (chartData.length > 5) {
      chartData.shift(); // Remove the first element to keep the chart size consistent
    }

    // Update the chart with new data
    myChart.data.datasets[0].data = chartData;
    myChart.update();
  } else {
    alert('Please enter a valid number between 0 and 100');
  }
});
