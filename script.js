function searchDestinations() { 
  const searchQuery = document.getElementById('destinationSearch').value.trim().toLowerCase();
  const destinations = {
    london: 'london.html',
    france: 'france.html',
    tokyo: 'japan.html',
    australia: 'australia.html',
    usa: 'usa.html'
  };

  if (destinations[searchQuery]) {
    // Redirect the user to the relevant page for known destinations
    window.location.href = destinations[searchQuery];
  } else {
    // Dynamically generate a new destination page
    generateDestinationPage(searchQuery);
  }
}

function generateDestinationPage(destination) {
  // Create new content for the destination page
  const destinationName = destination.charAt(0).toUpperCase() + destination.slice(1);
  const pageContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${destinationName} Trips - Themed Travel</title>
      <link rel="stylesheet" href="dynamic-pages.css">
    </head>
    <body>
      <header>
        <h1>Explore ${destinationName} with Our Themed Vehicles</h1>
        <p>Select from a variety of unique themed vehicles for your ${destinationName} adventure.</p>
      </header>
      <section class="trips">
        <div class="trip">
          <img src="images/placeholder_vehicle.jpg" alt="Placeholder Vehicle">
          <h3>${destinationName} City Tour</h3>
          <p>Discover the wonders of ${destinationName} with our themed vehicles. More trips coming soon!</p>
          <p><strong>Price:</strong> $200</p>
        </div>
      </section>
      <footer>
        <p>&copy; 2024 Themed Travel. All rights reserved.</p>
      </footer>
    </body>
    </html>
  `;

  // Create a new Blob for the dynamically generated page
  const blob = new Blob([pageContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);

  // Open the dynamically generated page in a new tab
  window.open(url, '_blank');
}