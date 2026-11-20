
// Store all images in an array

const images = [
    {
        src: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800",
        caption: "Mango"
    },
    {
        src: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800",
        caption: "Apple"
    },
    {
        src: "https://images.unsplash.com/photo- strawberries",
        caption: "Strawberry"
    },
    {
        src: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800",
        caption: "Banana"
    }
];

// Current image index
let currentIndex = 0;

// Slideshow timer
let slideTimer = null;

// Get HTML elements
const galleryImage = document.getElementById("galleryImage");
const caption = document.getElementById("caption");
const imageNumber = document.getElementById("imageNumber");
const dots = document.getElementById("dots");
const slideshowBtn = document.getElementById("slideshowBtn");


// Display image function
function showImage() {

    galleryImage.src = images[currentIndex].src;

    caption.innerText = images[currentIndex].caption;

    imageNumber.innerText =
        `Image ${currentIndex + 1} of ${images.length}`;

    // Update navigation dots
    dots.innerHTML = "";

    images.forEach((image, index) => {

        const dot = document.createElement("span");

        dot.className = "dot";

        if (index === currentIndex) {
            dot.classList.add("active");
        }

        dot.onclick = function() {
            currentIndex = index;
            showImage();
        };

        dots.appendChild(dot);

    });

}


// Next image function
function nextImage() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();

}


// Previous image function
function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();

}


// Play and Pause slideshow
function toggleSlideshow() {

    if (slideTimer === null) {

        slideTimer = setInterval(nextImage, 2000);

        slideshowBtn.innerText = "Pause Slideshow";

    } else {

        clearInterval(slideTimer);

        slideTimer = null;

        slideshowBtn.innerText = "Play Slideshow";

    }

}


// Display first image when page loads
showImage();
