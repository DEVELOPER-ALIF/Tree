// Toggle menu for mobile devices
function toggleMenu() {
    const navLinks = document.querySelector('header nav ul');
    navLinks.classList.toggle('show');
  }
  
  // Tokenomics Chart using Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Liquidity (51%)', 'Private Sale (40%)', 'Airdrop (4%)', 'Platform (5%)'],
    datasets: [{
      label: 'Token Distribution',
      data: [51, 40, 4, 5], // Adjusted data percentages
      backgroundColor: ['#2e8b57', '#ff5722', '#d9d9d9', '#4caf50'], // Updated colors
      borderColor: ['#2e8b57', '#ff5722', '#d9d9d9', '#4caf50'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
          }
        }
      }
    }
  }
});
