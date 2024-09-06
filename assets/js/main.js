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


let currentImageIndex = 0; // Index for the current image
const startIndex = 2000;
const endIndex = 2165;
const imagePath = './assets/images/sequence-images-min/azzurre-img';
const imageExtension = '-min.png';

// Preload all images
function preloadImages(callback) {
    let loadedImages = 0;
    for (let i = startIndex; i < endIndex; i++) {
        let img = new Image();
        img.src = imagePath + i + imageExtension;
        img.onload = function () {
            secquenceImages[i - startIndex] = img;
            loadedImages++;
            if (loadedImages === (endIndex - startIndex)) {
                callback(); // All images loaded
                document.querySelector('.loader_section').style.display =  'none';
            }
        };
        img.onerror = function () {
            console.error('Failed to load image: ' + img.src);
        };
    }
}

// Function to animate images using requestAnimationFrame
function animateFrames(timestamp) {
    if (!window.lastFrameTime) {
        window.lastFrameTime = timestamp;
    }
    const elapsed = timestamp - window.lastFrameTime;
    const frameDelay = 30; // 30ms per frame
    if (elapsed > frameDelay) {
        document.querySelector('#png-sequence img').src = secquenceImages[currentImageIndex].src;
        currentImageIndex = (currentImageIndex + 1) % secquenceImages.length; // Loop through images
        window.lastFrameTime = timestamp;
    }
    requestAnimationFrame(animateFrames); // Continue animation
}

// Start animation after preloading images
function startAnimation() {
    requestAnimationFrame(animateFrames);
}

window.onload = function () {
    preloadImages(startAnimation);
};