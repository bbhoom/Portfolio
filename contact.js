// Initially hide the back button
document.getElementById("button").style.display = "none";

// Add an event listener to the "Contact" button
document.getElementById("but").addEventListener("click", function () {
    // Flip the card
    document.getElementById("flip-card").querySelector('.card').classList.add("flipped");

    // Show the "Send" button after the flip animation is complete
    setTimeout(function () {
        document.getElementById("button").style.display = "block";
        document.getElementById("but").style.display = "none";  // Hide the "Contact" button
    }, 150); // Adjust this delay to match the card flip animation duration
});

// Add an event listener to the "Cancel" SVG button
document.getElementById("cancel-btn").addEventListener("click", function () {
    // Flip the card back to its original state
    document.getElementById("flip-card").querySelector('.card').classList.remove("flipped");

    // Show the "Contact" button and hide the "Send" button after flipping back
    setTimeout(function () {
        document.getElementById("button").style.display = "none";
        document.getElementById("but").style.display = "block";  // Show the "Contact" button
    }, 150); // Adjust this delay to match the card flip animation duration
});

window.addEventListener('load', function () {
    // Ensure no automatic scrolling occurs
    if (window.location.hash) {
        window.scrollTo(0, 0); // Scroll to top on page load
        history.pushState("", document.title, window.location.pathname); // Remove hash from URL
    }
});
