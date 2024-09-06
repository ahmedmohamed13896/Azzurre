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


// Function to preload all sequenceImages
function preloadImages(callback) {
    let currentIndex = 2000;
    let lastItemNumber = 2164;

    for (let i = 2000; i <= lastItemNumber; i++) {
        let img = new Image();
        img.src = './assets/images/sequence-images-min/azzurre-img' + i + '-min.png';
        secquenceImages.push(img);

        img.onload = function () {
            currentIndex++;
            if (currentIndex === lastItemNumber) {
                callback(); // Start the animation after preloading all images
            }
        };
    }
}

function startAnimation() {
    let startIndex = 2000;
    const endIndex = 2165;
    let lastFrameTime = 0; // Keep track of time for smooth animation

    function animateFrames(timestamp) {
        if (timestamp - lastFrameTime >= 30) { // Update frame every 30ms
            document.querySelector('#png-sequence img').src = './assets/images/sequence-images-min/azzurre-img' + startIndex + '-min.png';
            startIndex++;
            if (startIndex === endIndex) {
                startIndex = 2000; // Reset to the first image if we've reached the end
            }
            lastFrameTime = timestamp; // Update last frame time
        }

        requestAnimationFrame(animateFrames); // Continue the animation
    }

    requestAnimationFrame(animateFrames); // Start the first frame
}

// Preload images and start the animation after loading
window.onload = function () {
    preloadImages(startAnimation);
};