// Toggle NYC Photos
(function() {
    'use strict';
    
    function init() {
        const nycTriggers = document.querySelectorAll('.nyc-photos-trigger');
        const nycPhotos = document.getElementById('nyc-photos');
        const footer = document.querySelector('footer');
        let isPhotosShowing = false;
        
        console.log('NYC triggers found:', nycTriggers.length);
        console.log('Footer found:', footer);
        
        // Toggle NYC photos
        nycTriggers.forEach(trigger => {
            trigger.addEventListener('click', function() {
                if (isPhotosShowing) {
                    // Hide photos
                    if (nycPhotos) nycPhotos.style.display = 'none';
                    if (footer) footer.classList.remove('photos-visible');
                    isPhotosShowing = false;
                    console.log('Photos hidden, class removed');
                } else {
                    // Show photos
                    if (nycPhotos) nycPhotos.style.display = 'block';
                    if (footer) footer.classList.add('photos-visible');
                    isPhotosShowing = true;
                    console.log('Photos shown, class added');
                }
            });
        });
    }
    
    // Initialize on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
