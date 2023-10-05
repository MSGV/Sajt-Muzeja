const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let slideIndex = 0;

function showSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }
    slider.style.transform = `translateX(-${index * 100}%)`;
    slideIndex = index;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

setInterval(nextSlide, 5000);
