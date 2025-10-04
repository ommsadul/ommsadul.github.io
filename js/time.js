function updateTime() {
    const now = new Date();
    
    // Convert to EST timezone
    const estTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    
    let hours = estTime.getHours();
    const minutes = estTime.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    
    const timeString = `${hours}:${minutes} ${ampm}`;
    document.getElementById('current-time').textContent = timeString;
}

// Update time immediately
updateTime();

// Update time every minute
setInterval(updateTime, 60000);