/* =========================
   MUSIC DATABASE
========================= */

const music = [

    {
        title: "Deja Vu",
        year: "2024",
        type: "ALBUM",
        description:
            "أحد أبرز مشاريع سولجا، صدر في 2024 ويضم مجموعة من الأعمال التي تظهر تطور أسلوبه.",
        spotify:
            "https://open.spotify.com/search/Soulja%20Deja%20Vu"
    },

    {
        title: "Hageega",
        year: "2024",
        type: "DEJA VU",
        description:
            "Track from the Deja Vu project.",
        spotify:
            "https://open.spotify.com/search/Soulja%20Hageega"
    },

    {
        title: "Ronaldo",
        year: "2024",
        type: "DEJA VU",
        description:
            "Track from Soulja's Deja Vu project.",
        spotify:
            "https://open.spotify.com/search/Soulja%20Ronaldo"
    },

    {
        title: "London",
        year: "2024",
        type: "DEJA VU",
        description:
            "One of the tracks associated with Deja Vu.",
        spotify:
            "https://open.spotify.com/search/Soulja%20London"
    },

    {
        title: "Jabra",
        year: "2024",
        type: "DEJA VU",
        description:
            "A popular Soulja track.",
        spotify:
            "https://open.spotify.com/search/Soulja%20Jabra"
    },

    {
        title: "Donia",
        year: "2025",
        type: "SINGLE",
        description:
            "أغنية أصبحت من الأعمال واسعة الانتشار لسولجا داخل السودان.",
        spotify:
            "https://open.spotify.com/search/Soulja%20Donia"
    },

    {
        title: "Location",
        year: "2025",
        type: "SINGLE",
        description:
            "إصدار ارتبط بتجربة ترويجية تفاعلية حملت اسم SOULJA Run.",
        spotify:
            "https://open.spotify.com/search/Soulja%20Location"
    },

    {
        title: "15 Hikaya",
        year: "2025",
        type: "SINGLE",
        description:
            "One of Soulja's notable recent tracks.",
        spotify:
            "https://open.spotify.com/search/Soulja%2015%20Hikaya"
    },

    {
        title: "SUITS",
        year: "2025",
        type: "SINGLE",
        description:
            "A recent Soulja track.",
        spotify:
            "https://open.spotify.com/search/Soulja%20SUITS"
    },

    {
        title: "Charleston",
        year: "2021",
        type: "SINGLE",
        description:
            "إصدار يستلهم أجواء السبعينيات مع الحفاظ على الراب باللهجة السودانية.",
        spotify:
            "https://open.spotify.com/search/Soulja%20Charleston"
    }

];


/* =========================
   RENDER MUSIC
========================= */

const musicGrid = document.getElementById("musicGrid");

function renderMusic(filter = "all") {

    musicGrid.innerHTML = "";

    const filteredMusic = music.filter(item => {

        if (filter === "all") {
            return true;
        }

        if (filter === "2024") {
            return item.year === "2024";
        }

        if (filter === "2025") {
            return Number(item.year) >= 2025;
        }

        return true;

    });


    filteredMusic.forEach((item, index) => {

        const card = document.createElement("div");

        card.className = "music-card";

        card.innerHTML = `

            <span class="music-number">
                ${String(index + 1).padStart(2, "0")}
            </span>

            <span class="music-year">
                ${item.year}
            </span>

            <h3>
                ${item.title}
            </h3>

            <p>
                ${item.type}
            </p>

        `;

        card.addEventListener("click", () => {

            openMusicModal(item);

        });

        musicGrid.appendChild(card);

    });

}


/* =========================
   FILTERS
========================= */

const filters = document.querySelectorAll(".filter");

filters.forEach(button => {

    button.addEventListener("click", () => {

        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        renderMusic(button.dataset.filter);

    });

});


/* =========================
   MODAL
========================= */

const modal = document.getElementById("musicModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");


function openMusicModal(item) {

    modalContent.innerHTML = `

        <span style="
            color:#c6ff00;
            font-size:11px;
            letter-spacing:3px;
        ">
            ${item.year} / ${item.type}
        </span>

        <h2>
            ${item.title}
        </h2>

        <p>
            ${item.description}
        </p>

        <a
            class="spotify-button"
            href="${item.spotify}"
            target="_blank"
            rel="noopener noreferrer"
        >
            SEARCH ON SPOTIFY →
        </a>

    `;

    modal.classList.add("show");

}


modalClose.addEventListener("click", () => {

    modal.classList.remove("show");

});


modal.addEventListener("click", event => {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        modal.classList.remove("show");

    }

});


/* =========================
   LANGUAGE
========================= */

const languageBtn = document.getElementById("languageBtn");

let english = false;

languageBtn.addEventListener("click", () => {

    english = !english;

    if (english) {

        languageBtn.textContent = "AR";

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        document.querySelector(".hero-label").textContent =
            "SUDANESE RAP ARCHIVE";

        document.querySelector(".hero-subtitle").textContent =
            "USAMA ASHRAF";

        document.querySelector(".hero-description").textContent =
            "The journey of a Sudanese artist who brought Sudanese identity into modern rap, trap and contemporary music.";

        document.querySelector(".btn-primary").textContent =
            "DISCOVER THE STORY";

        document.querySelector(".btn-outline").textContent =
            "EXPLORE MUSIC";

    } else {

        languageBtn.textContent = "EN";

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        document.querySelector(".hero-label").textContent =
            "SUDANESE RAP ARCHIVE";

        document.querySelector(".hero-subtitle").textContent =
            "أسامة أشرف";

        document.querySelector(".hero-description").textContent =
            "رحلة فنان سوداني أعاد تقديم الهوية السودانية من خلال الراب، التراب والإيقاعات المحلية.";

        document.querySelector(".btn-primary").textContent =
            "اكتشف القصة";

        document.querySelector(".btn-outline").textContent =
            "استكشف الموسيقى";

    }

});


/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.textContent = "☀";

    } else {

        themeBtn.textContent = "☾";

    }

});


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    ".section, .timeline-item, .music-card, .gallery-item"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.08
    }

);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


/* =========================
   INITIALIZE
========================= */

renderMusic("all");