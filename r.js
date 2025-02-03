console.log("✅ prayer-times.js is running!");

document.addEventListener("DOMContentLoaded", async function () {
    const filePath = "https://raw.githubusercontent.com/Jack0Trade/Ramadan/main/jadual_waktu_solat_JAKIM.csv";

    try {
        console.log(`🔍 Fetching CSV from: ${filePath}`);
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.text();
        const rows = data.trim().split("\n").map(row => row.split(","));

        // Extract header row
        const headers = rows[0].map(h => h.trim());
        console.log("✅ Headers:", headers);

        // Get the index of prayer time columns
        const dateIndex = headers.indexOf("Tarikh Miladi");
        const imsakIndex = headers.indexOf("Imsak");
        const subuhIndex = headers.indexOf("Subuh");
        const syurukIndex = headers.indexOf("Syuruk");
        const zohorIndex = headers.indexOf("Zohor");
        const asarIndex = headers.indexOf("Asar");
        const maghribIndex = headers.indexOf("Maghrib");
        const isyakIndex = headers.indexOf("Isyak");

        if (dateIndex === -1) throw new Error("❌ Column 'Tarikh Miladi' not found!");

        const today = new Date();
        const todayDate = today.toLocaleDateString("en-GB", { 
            day: "2-digit", month: "short", year: "numeric" 
        }).replace(/\s+/g, "-");  // Converts "01 Jan 2025" to "01-Jan-2025"

        console.log("🔍 Looking for today's date:", todayDate);

        let found = false;
        let prayerTimes = {};  // To store today's prayer times

        rows.slice(1).forEach(row => {
            if (row[dateIndex].trim() === todayDate) {
                console.log("✅ Match found!", row);

                prayerTimes = {
                    "imsak": row[imsakIndex].trim(),
                    "subuh": row[subuhIndex].trim(),
                    "syuruk": row[syurukIndex].trim(),
                    "zohor": row[zohorIndex].trim(),
                    "asar": row[asarIndex].trim(),
                    "maghrib": row[maghribIndex].trim(),
                    "isyak": row[isyakIndex].trim(),
                };

                Object.keys(prayerTimes).forEach(prayer => {
                    document.getElementById(prayer).innerText = prayerTimes[prayer];
                });

                found = true;
            }
        });

        if (!found) {
            console.warn("⚠ No matching date found in CSV.");
            document.querySelectorAll("#imsak, #subuh, #syuruk, #zohor, #asar, #maghrib, #isyak")
                .forEach(el => el.innerText = "Not available");
        }

        // Live clock and highlighting feature
        function updateClock() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const currentTime = `${hours}:${minutes}`;

            // Update the live clock display
            document.getElementById("current-time").textContent = `${hours}:${minutes}:${seconds}`;

            // Highlight the matching prayer time
            highlightPrayerTime(currentTime);
        }

        function highlightPrayerTime(currentTime) {
            Object.keys(prayerTimes).forEach(prayer => {
                const cell = document.getElementById(prayer);
                if (cell) {
                    if (prayerTimes[prayer] === currentTime) {
                        cell.classList.add("bg-yellow-300", "text-black", "font-bold", "animate-pulse");
                    } else {
                        cell.classList.remove("bg-yellow-300", "text-black", "font-bold", "animate-pulse");
                    }
                }
            });
        }

        // Run the clock every second
        setInterval(updateClock, 1000);

    } catch (error) {
        console.error("❌ Fetch Error:", error);
    }
});
