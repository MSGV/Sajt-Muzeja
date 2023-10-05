const fadeImages = document.querySelectorAll('.fade-image');

function fadeInImages() {
    let delay = 0;
    fadeImages.forEach((image, index) => {
        setTimeout(() => {
            image.classList.add('active');
        }, delay);
        delay += 1000; // Change the delay as needed
    });
}

window.addEventListener('load', fadeInImages);
