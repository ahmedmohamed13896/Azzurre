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


function applySafariStyles() {
    if (isSafariOnMac() || isSafariOnIpad()) {
        document.querySelector('.main-section').classList.add('safari');
    } 
}

function isSafariOnMac() {
    const ua = navigator.userAgent;
    const isSafari = /Safari/.test(ua) && !/Chrome/.test(ua);
    const isMac = /Mac/.test(navigator.platform);
    return isSafari && isMac;
}

function isSafariOnIpad() {
    const ua = navigator.userAgent;
    const isSafari = /Safari/.test(ua) && !/Chrome/.test(ua);
    const isIpad = /iPad/.test(navigator.platform) || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
    return isSafari && isIpad;
}

window.onload = function () {
    document.querySelector('.loader_section').style.display =  'none';
    applySafariStyles();
};