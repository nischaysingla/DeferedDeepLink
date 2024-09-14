console.log("Hi this is nischay how are you")
let x = 0
function logMessage(message) {
  console.log(message + x);
}

// Example of logging when the page loads
window.onload = function() {
  logMessage('Page has loaded successfully! '+ x);
}

// Function to log button click
function logButtonClick() {
  x++;
  logMessage('Button was clicked!');
}
