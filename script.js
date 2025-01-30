// JavaScript to toggle menu visibility on click
const toggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');  // Get all the links in the menu

// Toggle the menu visibility when clicking the hamburger icon
toggle.addEventListener('click', () => {
  menu.classList.toggle('active'); // Toggle visibility of the menu
});


// Close the menu when a link is clicked
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');  // Close the menu when a link is clicked
  });
});

// JavaScript to toggle dark mode
const toggleButton = document.getElementById('toggle-dark-mode');
const icon = document.getElementById('icon');

// Function to apply dark mode from localStorage on page load
function applyDarkMode() {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    document.body.classList.remove('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
}

// Apply dark mode when the page loads
applyDarkMode();

// Function to toggle dark/light mode
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
  
    // Update localStorage based on dark mode status
    if (isDarkMode) {
      localStorage.setItem('darkMode', 'enabled');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon'); // Show moon icon for dark mode
    } else {
      localStorage.setItem('darkMode', 'disabled');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun'); // Show sun icon for light mode
    }
  });
}



document.addEventListener('DOMContentLoaded', function() {
  const readMoreBtn = document.querySelector('.read-more-btn');
  const profileDescription = document.querySelector('.profile-description');

  readMoreBtn.addEventListener('click', function() {
    profileDescription.classList.toggle('expanded');
    if (profileDescription.classList.contains('expanded')) {
      readMoreBtn.textContent = 'Read Less';
    } else {
      readMoreBtn.textContent = 'Read More';
    }
  });
});


