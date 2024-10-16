function searchDestinations() {
          const searchQuery = document.getElementById('destinationSearch').value.trim().toLowerCase();
          const destinations = {
            london: 'london.html',
            paris: 'paris.html',
            tokyo: 'tokyo.html',
            'new york': 'newyork.html'
          };
        
          if (destinations[searchQuery]) {
            // Redirect the user to the relevant page
            window.location.href = destinations[searchQuery];
          } else {
            alert('Destination not found. Please try again.');
          }
        }