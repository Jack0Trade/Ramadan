document.addEventListener("DOMContentLoaded", function () {
    function ramadanCountdown() {
        // Set the upcoming Ramadan start date (adjust yearly)
        const ramadanDate = new Date('February 28, 2025 00:00:00').getTime();
        const now = new Date().getTime();
        const diff = ramadanDate - now;

        if (diff > 0) {
            const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
            document.getElementById('countdown').innerText = days + " days left until Ramadan!";
        } else {
            document.getElementById('countdown').innerText = "Ramadan is here!";
        }
    }
// Select all slide elements
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('hidden', i !== index);
    });
}

// Next Slide Button
document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length; // Loop to the first slide after the last
    showSlide(currentSlide);
});

// Previous Slide Button
document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop to the last slide before the first
    showSlide(currentSlide);
});

// Show the first slide initially
showSlide(currentSlide);


    // Run function after DOM loads
    ramadanCountdown();
    setInterval(ramadanCountdown, 86400000); // Update daily
});
