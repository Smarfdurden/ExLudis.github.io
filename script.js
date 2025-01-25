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
  icon.classList.replace(isDarkMode ? 'fa-sun' : 'fa-moon', isDarkMode ? 'fa-moon' : 'fa-sun'); // Update icon
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

$(document).ready(function () {
  $('.load-page').on('click', function (event) {
    event.preventDefault(); // Prevent default action
    var pageUrl = $(this).attr('href') || $(this).data('url'); // Handle both links and buttons
    $('#content').load(pageUrl, function (response, status, xhr) {
      if (status === "error") {
        $('#content').html("<p>Error loading page: " + xhr.status + " " + xhr.statusText + "</p>");
      }
    });
  });
});



