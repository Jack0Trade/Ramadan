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
            { name: "Bazaar Jalan Tuanku Abdul Rahman", video: "https://www.youtube.com/embed/VIDEO_ID1" },
            { name: "Bazaar Taman Tun Dr. Ismail (TTDI)", video: "https://www.youtube.com/embed/VIDEO_ID2" },
            { name: "Bazaar Kampung Baru", video: "https://www.youtube.com/embed/VIDEO_ID3" }
        ],
        selangor: [
            { name: "Bazaar Ampang", video: "https://www.youtube.com/embed/VIDEO_ID4" },
            { name: "Bazaar Setia Alam", video: "https://www.youtube.com/embed/VIDEO_ID5" },
            { name: "Bazaar Selayang", video: "https://www.youtube.com/embed/VIDEO_ID6" }
        ]
    };

    const title = location === "kl" ? "Popular Bazaars in Kuala Lumpur" : "Popular Bazaars in Selangor";
    document.getElementById("bazaar-title").textContent = title;

    const bazaarItems = document.getElementById("bazaar-items");
    bazaarItems.innerHTML = "";

    bazaars[location].forEach(bazaar => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#" class="text-green-600 underline" onclick="event.preventDefault(); showVideo('${bazaar.video}')">${bazaar.name}</a>`;
        bazaarItems.appendChild(li);
    });

    document.getElementById("bazaar-list").classList.remove("hidden");
}

function showVideo(videoUrl) {
    const videoFrame = document.getElementById("video-frame");
    videoFrame.src = videoUrl;
    document.getElementById("video-popup").classList.remove("hidden");
}

function closePopup() {
    document.getElementById("video-popup").classList.add("hidden");
    document.getElementById("video-frame").src = "";
}
