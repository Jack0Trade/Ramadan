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

// Update countdown daily
setInterval(ramadanCountdown, 86400000); // 86400000 ms = 1 day
ramadanCountdown();
