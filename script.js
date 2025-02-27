document.addEventListener("DOMContentLoaded", function () {
    // Ramadan Countdown Function
    function ramadanCountdown() {
        const ramadanDate = new Date('February 29, 2025 00:00:00').getTime();
        const now = new Date().getTime();
        const diff = ramadanDate - now;

        if (diff > 0) {
            const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
            document.getElementById('countdown').innerText = days + " days left until Ramadan!";
        } else {
            document.getElementById('countdown').innerText = "Ramadan is here!";
        }
    }

    // Auto Slide Functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideIntervalTime = 5000; // Change slide every 5 seconds

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('hidden', i !== index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Start Auto Slide
    setInterval(nextSlide, slideIntervalTime);

    // Show the first slide initially
    showSlide(currentSlide);

    // Run countdown function initially and update daily
    ramadanCountdown();
    setInterval(ramadanCountdown, 86400000);
});
