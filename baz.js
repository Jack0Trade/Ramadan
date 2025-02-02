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
            { name: "Bazaar Jalan Tuanku Abdul Rahman", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4009.7132457691746!2d101.69455927498778!3d3.1533687531266774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49f2d5b29c23%3A0x98147be390c1c251!2sBazaar%20Lorong%20Tuanku%20Abdul%20Rahman!5e1!3m2!1sen!2smy!4v1738502798349!5m2!1sen!2smy"  },
            { name: "Bazaar Taman Tun Dr. Ismail (TTDI)", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64157.202734145416!2d101.55286449626776!3d3.1242040938898565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc495873198bb5%3A0xc2206c2c4cca0fae!2sBazar%20Ramadan%20TTDI!5e1!3m2!1sen!2smy!4v1738502368452!5m2!1sen!2smy"  },
            { name: "Bazaar Kampung Baru", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4009.6729551659128!2d101.6991348749877!3d3.163801653062401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc491f410c7f01%3A0x21927334f761fd71!2sKg%20Baru%20Bazar%20Ramadan!5e1!3m2!1sen!2smy!4v1738502867693!5m2!1sen!2smy"}
        ],
        selangor: [
            { name: "Bazaar Ampang", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4009.747346480039!2d101.76463577498771!3d3.144511653181109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37290ac0ff3b%3A0x887af1328fb53a1d!2sBazar%20Ramadan%20Bandar%20Baru%20Ampang!5e1!3m2!1sen!2smy!4v1738502913472!5m2!1sen!2smy" },
            { name: "Bazaar Setia Alam", map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32079.357470693856!2d101.4441025163733!3d3.099363078451013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc53f18cef6df3%3A0x422c7d7f05a4778b!2sBazaar%20Ramadan%20Setia%20Alam!5e1!3m2!1sen!2smy!4v1738503002491!5m2!1sen!2smy" },
            { name: "Bazaar Selayang", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4009.390043237317!2d101.64373087498774!3d3.236113052611889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc46f131f0c05d%3A0x1a98106c35617995!2sBazar%20Ramadan%20Selayang!5e1!3m2!1sen!2smy!4v1738503046592!5m2!1sen!2smy"  }
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
