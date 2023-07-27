document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('chart').getContext('2d');

  // Sample data
  const data = {
    labels: ['17', '18', '19', '20', '21', '22','23','24','25'],
    datasets: [{
      // label: 'Votes',
      data: [6, 5, 4, 5,7,2,5,3,7],
      backgroundColor:[ 
     'rgba(255, 99, 132, 0.8)', // Red
          'rgba(54, 162, 235, 0.8)', // Blue
          'rgba(255, 205, 86, 0.8)', // Yellow
          'rgba(75, 192, 192, 0.8)', // Green
          'rgba(153, 102, 255, 0.8)' // Purple
    ]
      // borderColor: 'rgba(54, 162, 235, 1)',
      // borderWidth: 1
    }]
  };

  // Chart configuration
  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      pattern: {
        paths: {
          default: {
            fillStyle: 'transparent',
            lineWidth: 3,
            spacing: 5
          }
        }
      },
      scales: {
        y: {
          ticks: {
            stepSize: 5, // Specify the interval between ticks
            callback: function(value) {
              if (value === 5) {
                return value + ' ()';
              }
              return value;
            }
          },
          suggestedMax: 10,
          beginAtZero: true
        }
       
      }

      
    }
    
  };
  

  // Create and render the bar chart
  new Chart(ctx, config);
});










