// Get the navbar element
const navbar = document.getElementById('navbar');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Check if the user has scrolled past a certain point (e.g., 50 pixels)
    if (window.scrollY > 50) {
        // If scrolled, add the 'scrolled-nav' class to change its appearance
        navbar.classList.add('scrolled-nav');
    } else {
        // If at the top, remove the class to revert to the initial state
        navbar.classList.remove('scrolled-nav');
    }
});