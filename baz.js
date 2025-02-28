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
            { name: "Bazaar Jalan Tuanku Abdul Rahman", videoId: "7217407516337048838" },
            { name: "Bazaar Taman Tun Dr. Ismail (TTDI)", videoId: "7221755933272149274" },
            { name: "Bazaar Kampung Baru", videoId: "7345407698625776897" }
        ],
        selangor: [
            { name: "Bazaar Ampang", videoId: "7345417496800791810" },
            { name: "Bazaar Setia Alam", videoId: "7256789012345678901" },
            { name: "Bazaar Selayang", videoId: "7267890123456789012" }
        ]
    };

    const title = location === "kl" ? "Popular Bazaars in Kuala Lumpur" : "Popular Bazaars in Selangor";
    document.getElementById("bazaar-title").textContent = title;

    const bazaarItems = document.getElementById("bazaar-items");
    bazaarItems.innerHTML = "";

    bazaars[location].forEach(bazaar => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#" class="text-green-600 underline" onclick="event.preventDefault(); showVideo('${bazaar.videoId}')">${bazaar.name}</a>`;
        bazaarItems.appendChild(li);
    });

    document.getElementById("bazaar-list").classList.remove("hidden");
}

function showVideo(videoId) {
    const videoContainer = document.getElementById("video-content");

    // Clear previous content
    videoContainer.innerHTML = "";

    // Create TikTok blockquote dynamically
    const blockquote = document.createElement("blockquote");
    blockquote.classList.add("tiktok-embed");
    blockquote.setAttribute("cite", `https://www.tiktok.com/@username/video/${videoId}`);
    blockquote.setAttribute("data-video-id", videoId);
    blockquote.style.maxWidth = "100%";
    blockquote.style.minWidth = "300px";
    blockquote.innerHTML = `<section></section>`;

    // Append blockquote to container
    videoContainer.appendChild(blockquote);

    // Remove old TikTok scripts to force reload
    document.querySelectorAll("script[src='https://www.tiktok.com/embed.js']").forEach(script => {
        script.remove();
    });

    // Append TikTok script dynamically
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Delay showing the popup to allow TikTok to load
    setTimeout(() => {
        document.getElementById("video-popup").classList.remove("hidden");
    }, 500); // 0.5s delay to ensure the video loads
}

function closePopup() {
    document.getElementById("video-popup").classList.add("hidden");
    document.getElementById("video-content").innerHTML = ""; // Clear content to prevent duplicate embeds
}
