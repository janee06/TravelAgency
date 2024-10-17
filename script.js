function searchDestinations() { 
  // Get values from the form inputs
  const destination = document.querySelector('.search-form input[type="text"]').value.trim().toLowerCase();
  const date = document.querySelector('.search-form input[type="date"]').value;
  const people = document.querySelector('.search-form input[type="number"]').value;

  // Predefined destinations
  const destinations = {
    london: 'london.html',
    france: 'france.html',
    japan: 'japan.html',
    australia: 'australia.html',
    usa: 'usa.html'
  };

  // Check if the destination exists in the predefined list
  if (destinations[destination]) {
    // Redirect the user to the relevant page
    window.location.href = `${destinations[destination]}?date=${date}&people=${people}`;
  } else {
    // If destination is unknown, generate a new page
    generateDestinationPage(destination, date, people);
  }
}

function generateDestinationPage(destination, date, people) {
  // Log values for now
  console.log(`Generated page for: ${destination}, Date: ${date}, People: ${people}`);

  // You can add logic here to generate a new destination page dynamically
  alert(`Sorry, no predefined page for ${destination}. \nDate: ${date} \nPeople: ${people}`);
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





// Variables for modals
const registerButton = document.getElementById('registerButton');
const registerModal = document.getElementById('registerModal');
const closeRegisterModal = document.getElementById('closeRegisterModal');
const signInButton = document.getElementById('signInButton');
const signInModal = document.getElementById('signInModal');
const closeModal = document.getElementById('closeModal');

// Variables for profile menu and dropdown
const profileMenu = document.getElementById('profileMenu');
const profileIcon = document.getElementById('profileIcon');
const profileDropdown = document.getElementById('profileDropdown');
const profileLink = document.getElementById('profileLink');
const profileLogoutButton = document.getElementById('profileLogoutButton');

// Variables for user profile
const userProfile = document.getElementById('userProfile');
const profileUsername = document.getElementById('profileUsername');
const profileEmail = document.getElementById('profileEmail');
const profilePicture = document.getElementById('profilePicture');

// Register/Sign In/Logout Buttons
const logoutButton = document.getElementById('logoutButton');

// Open/Close Register Modal
registerButton.addEventListener('click', () => {
  registerModal.style.display = 'block';
});
closeRegisterModal.addEventListener('click', () => {
  registerModal.style.display = 'none';
});

// Open/Close Sign In Modal
signInButton.addEventListener('click', () => {
  signInModal.style.display = 'block';
});
closeModal.addEventListener('click', () => {
  signInModal.style.display = 'none';
});

// Close modal when clicking outside of modal content
window.onclick = function(event) {
  if (event.target === registerModal) {
    registerModal.style.display = "none";
  } else if (event.target === signInModal) {
    signInModal.style.display = "none";
  }
};

// Profile Menu - Show Profile Dropdown on Click
profileIcon.addEventListener('click', () => {
  profileDropdown.classList.toggle('show');
});

// Show user profile after successful login
function showUserProfile(username, email, profilePic) {
  document.getElementById('registerButton').style.display = 'none';
  document.getElementById('signInButton').style.display = 'none';
  document.getElementById('profileMenu').style.display = 'inline-block';
  document.getElementById('logoutButton').style.display = 'inline';

  // Update profile with user details
  profileUsername.textContent = `Username: ${username}`;
  profileEmail.textContent = `Email: ${email}`;
  profilePicture.src = profilePic;  // Set profile picture

  // Show user profile and hide dropdown menu
  userProfile.style.display = 'block';
  profileDropdown.style.display = 'none'; 
}

// Handle Registration Form Submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('regUsername').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value.trim();

  // Simulate saving user info to localStorage
  if (username && email && password) {
    const user = {
      username: username,
      email: email,
      password: password,
      profilePic: "profile-picture.png"  // Placeholder for profile picture
    };
    localStorage.setItem('user', JSON.stringify(user)); // Store user data

    showUserProfile(username, email, user.profilePic);
  } else {
    alert("Please fill in all fields.");
  }
});

// Handle Sign In Form Submission
document.getElementById('signInForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const usernameOrEmail = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Retrieve stored user data from localStorage
  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && (storedUser.username === usernameOrEmail || storedUser.email === usernameOrEmail) && storedUser.password === password) {
    showUserProfile(storedUser.username, storedUser.email, storedUser.profilePic);
  } else {
    alert("Invalid credentials. Please try again.");
  }
});

// Handle Logout
profileLogoutButton.addEventListener('click', () => {
  localStorage.removeItem('user');
  alert("You have logged out.");

  // Reset the interface to show registration and sign-in options
  document.getElementById('registerButton').style.display = 'inline';
  document.getElementById('signInButton').style.display = 'inline';
  document.getElementById('profileMenu').style.display = 'none';
  document.getElementById('logoutButton').style.display = 'none';
  userProfile.style.display = 'none';
});

