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

        // Get the index of "Tarikh Miladi" column
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
        rows.slice(1).forEach(row => {
            if (row[dateIndex].trim() === todayDate) {
                console.log("✅ Match found!", row);
                document.getElementById("imsak").innerText = row[imsakIndex].trim();
                document.getElementById("subuh").innerText = row[subuhIndex].trim();
                document.getElementById("syuruk").innerText = row[syurukIndex].trim();
                document.getElementById("zohor").innerText = row[zohorIndex].trim();
                document.getElementById("asar").innerText = row[asarIndex].trim();
                document.getElementById("maghrib").innerText = row[maghribIndex].trim();
                document.getElementById("isyak").innerText = row[isyakIndex].trim();
                found = true;
            }
        });

        if (!found) {
            console.warn("⚠ No matching date found in CSV.");
            document.querySelectorAll("#imsak, #subuh, #syuruk, #zohor, #asar, #maghrib, #isyak")
                .forEach(el => el.innerText = "Not available");
        }
    } catch (error) {
        console.error("❌ Fetch Error:", error);
    }
});
