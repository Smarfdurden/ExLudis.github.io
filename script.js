// JavaScript to toggle menu visibility
const toggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

// Toggle menu visibility on hamburger click
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Close menu when a link is clicked
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// Dark mode toggle
const toggleButton = document.getElementById('toggle-dark-mode');
const icon = document.getElementById('icon');

// Function to update dark mode UI
function updateDarkModeUI(isDarkMode) {
  document.body.classList.toggle('dark-mode', isDarkMode); // Add/remove dark-mode
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled'); // Save preference
  const oldIconClass = isDarkMode ? 'fa-sun' : 'fa-moon';
  const newIconClass = isDarkMode ? 'fa-moon' : 'fa-sun';
  icon.classList.replace(oldIconClass, newIconClass); // Update icon
}

// Load dark mode preference on page load
document.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
  updateDarkModeUI(isDarkMode);
});

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
  const isDarkMode = !document.body.classList.contains('dark-mode');
  updateDarkModeUI(isDarkMode);
});

document.addEventListener('DOMContentLoaded', function () {
  // Check if the user has a preference stored in localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  // Toggle dark mode on button click
  $('#toggle-dark-mode').click(function () {
    document.body.classList.toggle('dark-mode');

    // Save the user's preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
});

$(document).ready(function() {
  // Check if dark mode is enabled
  const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
  if (isDarkMode) {
    $('body').addClass('dark-mode');
  } else {
    $('body').removeClass('dark-mode');
  }

  // Apply the background color immediately
  if ($('body').hasClass('dark-mode')) {
    $('body').css('background-color', '#00070C'); // Dark mode background color
  } else {
    $('body').css('background-color', '#F0F7EE'); // Light mode background color
  }

  // Toggle dark mode on button click
  $('#toggle-dark-mode').click(function() {
    $('body').toggleClass('dark-mode');
    const isDarkMode = $('body').hasClass('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    if (isDarkMode) {
      $('body').css('background-color', '#00070C'); // Dark mode background color
    } else {
      $('body').css('background-color', '#F0F7EE'); // Light mode background color
    }
  });
});