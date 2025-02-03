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
            { name: "Bazaar Jalan Tuanku Abdul Rahman", video: "<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@reezomyza/video/7217407516337048838" data-video-id="7217407516337048838" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@reezomyza" href="https://www.tiktok.com/@reezomyza?refer=embed">@reezomyza</a> The Iconic Bazaar Aidilfitri  @ Lorong TAR. . . . . <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a title="tiktokdrone" target="_blank" href="https://www.tiktok.com/tag/tiktokdrone?refer=embed">#tiktokdrone</a> <a title="ramadhan2023" target="_blank" href="https://www.tiktok.com/tag/ramadhan2023?refer=embed">#ramadhan2023</a> <a title="bazaarramadhan" target="_blank" href="https://www.tiktok.com/tag/bazaarramadhan?refer=embed">#bazaarramadhan</a> <a title="jalantar" target="_blank" href="https://www.tiktok.com/tag/jalantar?refer=embed">#jalantar</a> <a title="bazaaraidilfitri" target="_blank" href="https://www.tiktok.com/tag/bazaaraidilfitri?refer=embed">#bazaaraidilfitri</a> <a title="dbkl" target="_blank" href="https://www.tiktok.com/tag/dbkl?refer=embed">#dbkl</a> <a title="lorongtar" target="_blank" href="https://www.tiktok.com/tag/lorongtar?refer=embed">#lorongtar</a> <a title="jakel" target="_blank" href="https://www.tiktok.com/tag/jakel?refer=embed">#jakel</a> <a title="malaysiagazette" target="_blank" href="https://www.tiktok.com/tag/malaysiagazette?refer=embed">#malaysiagazette</a> <a title="sinarharian" target="_blank" href="https://www.tiktok.com/tag/sinarharian?refer=embed">#sinarharian</a> <a title="destinasitv" target="_blank" href="https://www.tiktok.com/tag/destinasitv?refer=embed">#destinasitv</a>  <a title="citylights" target="_blank" href="https://www.tiktok.com/tag/citylights?refer=embed">#citylights</a> <a title="kualalumpur" target="_blank" href="https://www.tiktok.com/tag/kualalumpur?refer=embed">#kualalumpur</a> <a title="malaysia" target="_blank" href="https://www.tiktok.com/tag/malaysia?refer=embed">#malaysia</a> <a title="discoverkualalumpur" target="_blank" href="https://www.tiktok.com/tag/discoverkualalumpur?refer=embed">#discoverkualalumpur</a> <a title="dji" target="_blank" href="https://www.tiktok.com/tag/dji?refer=embed">#dji</a> <a title="djimalaysia" target="_blank" href="https://www.tiktok.com/tag/djimalaysia?refer=embed">#djimalaysia</a> <a title="malaysia" target="_blank" href="https://www.tiktok.com/tag/malaysia?refer=embed">#malaysia</a> <a title="dronereels" target="_blank" href="https://www.tiktok.com/tag/dronereels?refer=embed">#dronereels</a> <a title="malaysiatrullyasia" target="_blank" href="https://www.tiktok.com/tag/malaysiatrullyasia?refer=embed">#malaysiatrullyasia</a> <a title="dronemalaysia" target="_blank" href="https://www.tiktok.com/tag/dronemalaysia?refer=embed">#dronemalaysia</a> <a title="visitmalaysia" target="_blank" href="https://www.tiktok.com/tag/visitmalaysia?refer=embed">#visitmalaysia</a> <a title="djiamazing" target="_blank" href="https://www.tiktok.com/tag/djiamazing?refer=embed">#djiamazing</a> <a title="imageofmalaysia" target="_blank" href="https://www.tiktok.com/tag/imageofmalaysia?refer=embed">#imageofmalaysia</a> <a title="dronepointofview" target="_blank" href="https://www.tiktok.com/tag/dronepointofview?refer=embed">#dronepointofview</a> <a title="nightphotoearth" target="_blank" href="https://www.tiktok.com/tag/nightphotoearth?refer=embed">#nightphotoearth</a> <a title="reezdrone" target="_blank" href="https://www.tiktok.com/tag/reezdrone?refer=embed">#reezdrone</a> <a target="_blank" title="♬ original sound  - Reez" href="https://www.tiktok.com/music/original-sound-Reez-7217407507492244230?refer=embed">♬ original sound  - Reez</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>" },
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
