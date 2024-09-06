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



// Function to preload all secquenceImages
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
                callback();
            }
        };
    }
}

function startAnimation(){
    let startIndex = 2000;
    const endIndex = 2165;
    setInterval(function () {
        document.querySelector('#png-sequence img').src = './assets/images/sequence-images-min/azzurre-img' + startIndex + '-min.png';
        startIndex++;
        startIndex = startIndex === endIndex ? 2000 : (startIndex);
    }, 30);
    document.querySelector('.loader_section').style.display =  'none';
}

// Preload images and start the animation after loading
window.onload = function () {
    preloadImages(startAnimation)    
};




