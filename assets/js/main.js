const items = document.querySelectorAll('.animated-content .item');
let currentIndex = 1;

setInterval(() => {
    // Remove 'active' class from all items
    items.forEach(item => item.classList.remove('active'));

    // Add 'active' class to the current item
    items[currentIndex].classList.add('active');

    // Update the index to the next item
    currentIndex = (currentIndex + 1) % items.length;
}, 5000); // Change the class every 1 second (1000 ms)