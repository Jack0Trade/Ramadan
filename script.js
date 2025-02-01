function ramadanCountdown() {
    const ramadanDate = new Date('March 10, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const diff = ramadanDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById('countdown').innerText = days + " days left!";
    } else {
        document.getElementById('countdown').innerText = "Ramadan is here!";
    }
}
ramadanCountdown();
