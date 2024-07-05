// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the themeToggle button
    const themeToggle = document.getElementById('themeToggle');

    // Check if a theme preference is saved in localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeButtonText();
    }

    // Toggle between light and dark mode
    themeToggle.addEventListener('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        updateThemeButtonText();
    });

    // Function to update theme toggle button text
    function updateThemeButtonText() {
        themeToggle.innerText = document.documentElement.getAttribute('data-theme') === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
});
