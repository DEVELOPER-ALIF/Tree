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
      labels: ['Airdrop (400M)', 'Other (9.6B)'],
      datasets: [{
        label: 'Token Distribution',
        data: [400, 9600],
        backgroundColor: ['#2e8b57', '#d9d9d9'],
        borderColor: ['#2e8b57', '#d9d9d9'],
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
              return tooltipItem.label + ': ' + tooltipItem.raw / 1000 + 'B';
            }
          }
        }
      }
    }
  });
  