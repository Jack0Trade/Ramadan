document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn-kl").addEventListener("click", function () {
        showBazaars("kl");
    });

    document.getElementById("btn-selangor").addEventListener("click", function () {
        showBazaars("selangor");
    });
});

function showBazaars(location) {
    const bazaars = {
        kl: [
            { name: "Bazaar Jalan Tuanku Abdul Rahman", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31871.163295166877!2d101.6937!3d3.1595" },
            { name: "Bazaar Taman Tun Dr. Ismail (TTDI)", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31877.0852143738!2d101.6314!3d3.1393" },
            { name: "Bazaar Kampung Baru", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31871.07899621787!2d101.7041!3d3.1612" }
        ],
        selangor: [
            { name: "Bazaar Stadium Shah Alam", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31877.536685909923!2d101.5298!3d3.0696" },
            { name: "Bazaar Section 13 Shah Alam", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31878.085394153207!2d101.5333!3d3.0802" },
            { name: "Bazaar Bandar Baru Bangi", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31879.493457435634!2d101.7415!3d2.9587" }
        ]
    };

    const title = location === "kl" ? "Popular Bazaars in Kuala Lumpur" : "Popular Bazaars in Selangor";
    document.getElementById("bazaar-title").textContent = title;

    const bazaarItems = document.getElementById("bazaar-items");
    bazaarItems.innerHTML = "";

    bazaars[location].forEach(bazaar => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#" class="text-green-600 underline" onclick="showMap('${bazaar.map}')">${bazaar.name}</a>`;
        bazaarItems.appendChild(li);
    });

    document.getElementById("bazaar-list").classList.remove("hidden");
}

function showMap(mapUrl) {
    const mapFrame = document.getElementById("map-frame");
    mapFrame.src = mapUrl;
    document.getElementById("map-container").classList.remove("hidden");
}
