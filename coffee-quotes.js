// coffee-quotes.js

// Array of coffee quotes
const coffeeQuotes = [
    "Life begins after coffee.",
    "Espresso yourself!",
    "But first, coffee.",
    "Rise and grind, it's coffee time",
    "Sippin' sanity.",
    "Coffee is a hug in a mug.",
    "Another day, another cup of coffee.",
    "Coffee is the best part of waking up. "
    // Add more quotes as needed
];

// Function to generate a random quote
function generateQuote() {
    const quoteDisplay = document.getElementById('quote-display');
    const randomIndex = Math.floor(Math.random() * coffeeQuotes.length);
    quoteDisplay.textContent = coffeeQuotes[randomIndex];
}
