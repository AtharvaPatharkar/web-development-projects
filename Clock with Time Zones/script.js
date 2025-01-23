// Update time for a specific timezone
function updateClock(timezone, elementId) {
    const now = new Date();
    const options = {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    document.getElementById(elementId).innerText = formatter.format(now);
  }
  
  // Update clocks periodically
  function updateClocks() {
    updateClock('America/New_York', 'time-ny');
    updateClock('Europe/London', 'time-london');
    updateClock('Asia/Kolkata', 'time-mumbai'); // Indian Time Zone
    updateClock('Asia/Tokyo', 'time-tokyo');
    updateClock('Australia/Sydney', 'time-sydney');
  }
  
  // Refresh every second
  setInterval(updateClocks, 1000);
  updateClocks(); // Initial call to set clocks immediately
  