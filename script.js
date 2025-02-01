console.log("✅ script.js is running!");
document.addEventListener("DOMContentLoaded", function () {
    // Function to get the next Ramadan date
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

    // Function to update Ramadan countdown
    function ramadanCountdown() {
        const ramadanDate = getNextRamadanDate();
        const now = new Date();
        const diff = ramadanDate.getTime() - now.getTime();

        // Format Ramadan date
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const ramadanDateString = ramadanDate.toLocaleDateString('en-GB', options);

        if (diff > 0) {
            const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
            document.getElementById('countdown').innerText = `${days} days left until Ramadan!`;
            document.getElementById('ramadanDate').innerText = `Ramadan begins on ${ramadanDateString}`;
        } else {
            document.getElementById('countdown').innerText = "🌙 Ramadan Kareem!";
            document.getElementById('ramadanDate').innerText = `🎉 Ramadan has begun! Wishing you a blessed month!`;
        }
    }


    // Run functions after DOM loads
    ramadanCountdown();
    setInterval(ramadanCountdown, 86400000); // Update daily
    
});
