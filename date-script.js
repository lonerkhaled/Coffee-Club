// date-script.js

// Function to get the current date
function getCurrentDate() {
    const currentDateElement = document.getElementById('current-date');
    const currentDate = new Date();

    // Format the date as desired (e.g., "Month Day, Year")
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Update the content of the date element
    currentDateElement.textContent = formattedDate;
}

// Call the function to set the initial date when the page loads
getCurrentDate();
