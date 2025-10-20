// NYC Dream Progress Tracker
(function() {
    'use strict';
    
    function updateProgress() {
        // Use year, month (0-indexed), day format
        const startDate = new Date(2024, 7, 1); // August 1, 2024
        const endDate = new Date(2027, 6, 31); // July 31, 2027
        const today = new Date();
        
        // Calculate total months: August 2024 to July 2027
        const yearDiff = endDate.getFullYear() - startDate.getFullYear();
        const monthDiff = endDate.getMonth() - startDate.getMonth();
        const totalMonths = (yearDiff * 12) + monthDiff;
        
        // Calculate months passed: August 2024 to current month
        const passedYearDiff = today.getFullYear() - startDate.getFullYear();
        const passedMonthDiff = today.getMonth() - startDate.getMonth();
        const monthsPassed = (passedYearDiff * 12) + passedMonthDiff;
        
        // Current month (1-indexed for display)
        const currentMonth = monthsPassed + 1;
        const percentage = Math.min(Math.max((monthsPassed / totalMonths) * 100, 0), 100);
        
        const progressBar = document.getElementById('nyc-progress');
        const progressText = document.getElementById('progress-text');
        
        if (progressBar && progressText) {
            progressBar.style.width = percentage + '%';
            progressText.textContent = `August '24 → Month ${currentMonth} of ${totalMonths} → July '27`;
        }
    }
    
    // Update on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateProgress);
    } else {
        updateProgress();
    }
})();