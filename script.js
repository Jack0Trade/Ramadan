document.addEventListener("DOMContentLoaded", function () {
    function getNextRamadanDate() {
        const today = new Date();
        const currentYear = today.getFullYear();
        
        const ramadanStartDates = {
            2025: new Date(Date.UTC(2025, 1, 28, 0, 0, 0)), // Feb 28, 2025
            2026: new Date(Date.UTC(2026, 1, 17, 0, 0, 0)), // Feb 17, 2026
            2027: new Date(Date.UTC(2027, 1, 7, 0, 0, 0)),  // Feb 7, 2027
            2028: new Date(Date.UTC(2028, 0, 27, 0, 0, 0))  // Jan 27, 2028
        };

        return ramadanStartDates[currentYear] || new Date(Date.UTC(currentYear + 1, 2, 15, 0, 0, 0)); // Default: March 15
    }

    function ramadanCountdown() {
        const ramadanDate = getNextRamadanDate().getTime();
        const now = new Date().getTime();
        const diff = ramadanDate - now;

        if (diff > 0) {
            const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
            document.getElementById('countdown').innerText = days + " days left until Ramadan!";
        } else {
            document.getElementById('countdown').innerText = "Ramadan is here!";
        }
    }

    // Run function after DOM loads
    ramadanCountdown();
    setInterval(ramadanCountdown, 86400000); // Update daily
});
