// Hent elementerne
const burgerContainer = document.getElementById('burger-container');
const navLinks = document.getElementById('nav-links');

// Tilføj klik-event til burger-container
burgerContainer.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Skifter mellem at vise/skjule menuen
});

// Videoelementer
const videos = document.querySelectorAll(".video-slide");
let currentIndex = 0;

// Start første video
videos[currentIndex].style.display = "block";

// Funktion til at skifte video, når den aktuelle er færdig
videos.forEach((video, index) => {
    video.addEventListener("ended", function() {
        // Skjul den nuværende video
        videos[currentIndex].style.display = "none";
        
        // Opdater indeks til næste video
        currentIndex = (currentIndex + 1) % videos.length;

        // Vis den næste video
        videos[currentIndex].style.display = "block";
        videos[currentIndex].play(); // Spil den næste video
    });
});