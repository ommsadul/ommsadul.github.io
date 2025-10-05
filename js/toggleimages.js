// Toggle JHU Images
(function() {
    'use strict';
    
    function init() {
        const jhuTriggers = document.querySelectorAll('.jhu-trigger');
        const videoContainer = document.getElementById('video-container');
        const jhuImages = document.getElementById('jhu-images');
        
        let isImagesShowing = false;
        
        // Toggle between images and video
        jhuTriggers.forEach(trigger => {
            trigger.addEventListener('click', function() {
                if (isImagesShowing) {
                    // Hide images, show video
                    if (jhuImages) jhuImages.style.display = 'none';
                    if (videoContainer) videoContainer.style.display = 'block';
                    isImagesShowing = false;
                } else {
                    // Hide video, show images
                    if (videoContainer) videoContainer.style.display = 'none';
                    if (jhuImages) jhuImages.style.display = 'block';
                    isImagesShowing = true;
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