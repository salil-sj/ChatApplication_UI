export  const emailValidation = (email)=>{
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email)
}

export const passwordValidation = (password)=>{
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    return re.test(password)
}

export function formatRelativeTime(timestamp) {
    // Parse the timestamp string
    const parsedTime = new Date(timestamp);
  
    // Get today's date object
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight for accurate comparison
  
    // Calculate the difference in days
    const deltaDays = Math.floor((today - parsedTime) / (1000 * 60 * 60 * 24));
  
    // Format the time string (12-hour format with AM/PM, handle single digit minutes)
    const timeString = parsedTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit', // Ensure two digits for minutes (no padding)
      hour12: true
    });
  
    if (deltaDays === 0) {
      return `today ${timeString}`;
    } else if (deltaDays === 1) {
      return 'yesterday';
    } else {
      return `${deltaDays} days ago`;
    }
  }