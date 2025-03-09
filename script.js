

// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Example: Log a message when the splash screen is fully loaded
    console.log('Birthday Celebration Splash Screen is ready!');

    // Redirect to card.html after 5 seconds
    setTimeout(() => {
        window.location.href = 'card.html';
    }, 7000); // 5000 milliseconds = 5 seconds
});