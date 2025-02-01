document.addEventListener("DOMContentLoaded", async function () {
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

    // Function to load daily prayer times from CSV
    async function loadPrayerTimes() {
        const filePath = "https://raw.githubusercontent.com/Jack0Trade/Ramadan/refs/heads/main/jadual_waktu_solat_JAKIM.csv"; // Ensure this is accessible

        const response = await fetch(filePath);
        const data = await response.text();

        // Parse CSV data
        const rows = data.split("\n").map(row => row.split(","));
        const today = new Date();
        const todayDate = today.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).replace(" ", "-");

        let found = false;
        rows.slice(1).forEach(row => {
            if (row[0].trim() === todayDate) {
                document.getElementById("imsak").innerText = row[3].trim();
                document.getElementById("subuh").innerText = row[4].trim();
                document.getElementById("syuruk").innerText = row[5].trim();
                document.getElementById("zohor").innerText = row[6].trim();
                document.getElementById("asar").innerText = row[7].trim();
                document.getElementById("maghrib").innerText = row[8].trim();
                document.getElementById("isyak").innerText = row[9].trim();
                found = true;
            }
        });

        if (!found) {
            document.getElementById("imsak").innerText = "Not available";
            document.getElementById("subuh").innerText = "Not available";
            document.getElementById("syuruk").innerText = "Not available";
            document.getElementById("zohor").innerText = "Not available";
            document.getElementById("asar").innerText = "Not available";
            document.getElementById("maghrib").innerText = "Not available";
            document.getElementById("isyak").innerText = "Not available";
        }
    }

    // Run functions after DOM loads
    ramadanCountdown();
    setInterval(ramadanCountdown, 86400000); // Update daily
    loadPrayerTimes(); // Load prayer times from CSV
});
