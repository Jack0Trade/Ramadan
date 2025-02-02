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
            { name: "Bazaar Jalan Tuanku Abdul Rahman", map: "https://www.google.com/maps/dir//Bazaar+Lorong+Tuanku+Abdul+Rahman,+70,+Lorong+Tuanku+Abdul+Rahman,+Kuala+Lumpur+City+Centre,+50000+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31cc49f2d5b29c23:0x98147be390c1c251?sa=X&ved=1t:57443&ictx=111" },
            { name: "Bazaar Taman Tun Dr. Ismail (TTDI)", map: "https://www.google.com/maps/dir/3.2669696,101.6692736/Bazar+Ramadan+Jalan+TAR+(Bazar+Aidilfitri+KL),+Lorong+Tuanku+Abdul+Rahman,+Kuala+Lumpur+City+Centre,+50100+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur/@3.2087599,101.6425528,14732m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31cc49a95996ffb3:0x60404b010116a379!2m2!1d101.6968044!2d3.1546917?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" },
            { name: "Bazaar Kampung Baru", map: "https://www.google.com/maps/dir//45,+Jln+Raja+Alang,+Kampung+Baru,+50300+Kuala+Lumpur,+Wilayah+Persekutuan+Kuala+Lumpur/@3.163793,101.6193078,29465m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x31cc491f410c7f01:0x21927334f761fd71!2m2!1d101.7017098!2d3.1637963?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" }
        ],
        selangor: [
            { name: "Bazaar Ampang", map: "https://www.google.com/maps/place/Bazar+Ramadan+Bandar+Baru+Ampang/@3.1445063,101.690993,14733m/data=!3m1!1e3!4m10!1m2!2m1!1sbazaar+ramadan+selangor+2025!3m6!1s0x31cc37290ac0ff3b:0x887af1328fb53a1d!8m2!3d3.1445063!4d101.7672107!15sChxiYXphYXIgcmFtYWRhbiBzZWxhbmdvciAyMDI1Wh4iHGJhemFhciByYW1hZGFuIHNlbGFuZ29yIDIwMjWSAQViYXphcpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOU2MwMVhYMngzUlJBQuABAPoBBAgAECs!16s%2Fg%2F11fl4lc6mc?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" },
            { name: "Bazaar Setia Alam", map: "https://www.google.com/maps/place/Bazar+Ramadan+Seksyen+14/@3.2361077,101.4938705,29463m/data=!3m1!1e3!4m10!1m2!2m1!1sbazaar+ramadan+selangor+2025!3m6!1s0x31cc4b22aab6bb71:0xf05aa6a7d95f8!8m2!3d3.1094069!4d101.6362394!15sChxiYXphYXIgcmFtYWRhbiBzZWxhbmdvciAyMDI1Wh4iHGJhemFhciByYW1hZGFuIHNlbGFuZ29yIDIwMjWSAQxuaWdodF9tYXJrZXSaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUkVlVWwxYUhaQlJSQULgAQD6AQUIkQEQRA!16s%2Fg%2F11ghnql_sw?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" },
            { name: "Bazaar Selayang", map: "https://www.google.com/maps/place/Bazar+Ramadan+Selayang/@3.2361077,101.4938705,29463m/data=!3m1!1e3!4m10!1m2!2m1!1sbazaar+ramadan+selangor+2025!3m6!1s0x31cc46f131f0c05d:0x1a98106c35617995!8m2!3d3.2361077!4d101.6463058!15sChxiYXphYXIgcmFtYWRhbiBzZWxhbmdvciAyMDI1Wh4iHGJhemFhciByYW1hZGFuIHNlbGFuZ29yIDIwMjWSAQViYXphcpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VNeWFrcElXVkJSRUFF4AEA-gEECAwQNg!16s%2Fg%2F11g8nhj83h?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" }
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
