console.log("Hi this is nischay how are you")
let x = 0
function logMessage(message) {
  console.log(message + x);
  window.location.replace('intent://invoice/#Intent;scheme=flipkart;package=com.flipkart.android;end');
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

navigator.userAgent.match('Android')
async function getDetails() {
  const relatedApps = await navigator.getInstalledRelatedApps();
// Dump all the returned related apps into a table in the console
  console.table(relatedApps);
// Search for a specific installed platform-specific app
  const psApp = relatedApps.find((app) => app.id === "com.flipkart.android");
  if (psApp && doesVersionSendPushMessages(psApp.version)) {
    // There's an installed platform-specific app that handles sending push messages
    // No need to handle this via the web app
    return;
  }

}


