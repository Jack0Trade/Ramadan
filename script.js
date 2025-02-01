console.log("✅ script.js is running!");
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
        const filePath = "https://raw.githubusercontent.com/Jack0Trade/Ramadan/main/jadual_waktu_solat_JAKIM.csv?raw=true";

        try {
            console.log("🔍 Fetching CSV file...");
            const response = await fetch(filePath);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const data = await response.text();
            console.log("✅ CSV Loaded Successfully:\n", data);

            const rows = data.trim().split("\n").map(row => row.split(","));
            console.log("✅ Parsed CSV Rows:", rows);

            const today = new Date();
            const todayDate = today.toLocaleDateString("en-GB", { 
                day: "2-digit", month: "short", year: "numeric" 
            }).replace(" ", "-");  // Converts "01 Jan 2025" to "01-Jan-2025"

            console.log("🔍 Looking for today's date:", todayDate);

            let found = false;
            rows.slice(1).forEach((row, index) => {
                const csvDate = row[0].trim();
                console.log(`Checking row ${index + 1}:`, csvDate, "vs", todayDate);

                if (csvDate === todayDate) {
                    console.log("✅ Match found!", row);
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
                console.warn("⚠ No matching date found in CSV.");
                document.getElementById("imsak").innerText = "Not available";
                document.getElementById("subuh").innerText = "Not available";
                document.getElementById("syuruk").innerText = "Not available";
                document.getElementById("zohor").innerText = "Not available";
                document.getElementById("asar").innerText = "Not available";
                document.getElementById("maghrib").innerText = "Not available";
                document.getElementById("isyak").innerText = "Not available";
            }
        } catch (error) {
            console.error("❌ Fetch Error:", error);
        }
    }

    // Run functions after DOM loads
    ramadanCountdown();
    setInterval(ramadanCountdown, 86400000); // Update daily
    loadPrayerTimes(); // Load prayer times from CSV
});
