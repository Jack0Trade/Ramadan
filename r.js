console.log("✅ prayer-times.js is running!");

document.addEventListener("DOMContentLoaded", async function () {
    const filePath = "https://raw.githubusercontent.com/Jack0Trade/Ramadan/main/jadual_waktu_solat_JAKIM.csv";

    try {
        console.log(`🔍 Fetching CSV from: ${filePath}`);
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.text();
        const rows = data.trim().split("\n").map(row => row.split(","));

        const today = new Date();
        const todayDate = today.toLocaleDateString("en-GB", { 
        day: "2-digit", month: "short", year: "numeric" 
        });

        let found = false;
        rows.slice(1).forEach(row => {
           if (row[0].trim() === todayDate.trim()) { ... }
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
            document.querySelectorAll("#imsak, #subuh, #syuruk, #zohor, #asar, #maghrib, #isyak").forEach(el => el.innerText = "Not available");
        }
    } catch (error) {
        console.error("❌ Fetch Error:", error);
    }
});

