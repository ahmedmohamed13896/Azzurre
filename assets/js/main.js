const items = document.querySelectorAll('.animated-content .item');
let currentIndex = 1;
const secquenceImages = []; // Array to hold all preloaded images

setInterval(() => {
    // Remove 'active' class from all items
    items.forEach(item => item.classList.remove('active'));

    // Add 'active' class to the current item
    items[currentIndex].classList.add('active');

    // Update the index to the next item
    currentIndex = (currentIndex + 1) % items.length;
}, 5000); // Change the class every 1 second (1000 ms)



// Start animation after preloading images
function startAnimation() {
    requestAnimationFrame(animateFrames);
}

window.onload = function () {
    document.querySelector('.loader_section').style.display =  'none';

    const video = document.getElementById('background-video');
    const webmSource = document.getElementById('webmSource');
    const mp4Source = document.getElementById('mp4Source');

    // Check if the browser can play WebM format
    if (!video.canPlayType('video/webm')) {
        // Remove the WebM source if it's not supported
        webmSource.remove();
    }
    
    // Load the video again to use the remaining source
    video.load();
};