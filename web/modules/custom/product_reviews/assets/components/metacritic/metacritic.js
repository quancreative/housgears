(function() {
  // Function to make the number count up
  function startCount() {
    // Get the HTML element
    const ratingElement = document.getElementById('ratingNumber');

    // Make sure the element exists before continuing
    if (!ratingElement) {
      return;
    }

    // Set the final target number from the HTML content
    const targetNumber = parseInt(ratingElement.textContent, 10);
    // Set the duration of the count-up animation in milliseconds
    const duration = 500; // 2 seconds

    // Get the current number to start from 0
    let currentNumber = 0;

    // Calculate the interval for each step of the count
    const increment = targetNumber / (duration / 10);

    // Use setInterval to update the number over time
    const timer = setInterval(() => {
      // Increase the current number
      currentNumber += increment;

      // Stop the timer when the current number reaches or exceeds the target
      if (currentNumber >= targetNumber) {
        clearInterval(timer);
        currentNumber = targetNumber; // Ensure the final number is exact
      }

      // Update the text content of the HTML element
      ratingElement.textContent = Math.round(currentNumber);
    }, 10);
  }

  // Call the function when the window has fully loaded
  window.addEventListener('DOMContentLoaded', startCount);
})();
