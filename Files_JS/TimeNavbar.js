// Define the updateClock function
function updateClock() {
  // Get the current date and time
  const now = new Date();
  
  // Get day, month, year, hours, minutes, and seconds, and pad them with leading zeros if necessary
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Note: January is 0, so we add 1 to get the correct month
  const year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  // Construct the date and time string in the format DD/MM/YYYY HH:MM:SS
  const dateTimeString = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  
  // Update the content of the HTML element with the ID 'dateTime' to display the date and time
  document.getElementById('clock').textContent = dateTimeString;
}

// Call the updateClock function every second using setInterval
setInterval(updateClock, 1000);

// Call updateClock once immediately to display the initial date and time
updateClock();
