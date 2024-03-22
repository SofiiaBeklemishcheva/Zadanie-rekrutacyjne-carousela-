const carouselContainer = document.getElementById("carousel-element-container")
const slider = document.getElementById("slides-inner-container");
const slidesContainer = document.getElementById("slides-container");
const arrowLeft = document.getElementById("left-arrow-container");
const arrowRight = document.getElementById("right-arrow-container");


let positionPX = 0;
let position = 0;
let tilesToDisplay
let slidesContainerWidth
let carouselWidth = carouselContainer.offsetWidth
const slidesCount = slider.getElementsByClassName("tile-container").length;

function calculateTilesAmount() {
    carouselWidth = carouselContainer.offsetWidth
    if (carouselWidth < 768) {
        tilesToDisplay = 1;
        slidesContainerWidth = 280;
    } else if (carouselWidth < 1280) {
        tilesToDisplay = 2;
        slidesContainerWidth = 560;
    } else {
        tilesToDisplay = 4;
        slidesContainerWidth = 1120;
    }
    slidesContainer.style.width = slidesContainerWidth + "px"
}

window.addEventListener("resize", function () {
    calculateTilesAmount()
})

calculateTilesAmount()
arrowRight.style.opacity = "0";


arrowLeft.addEventListener('click', () => {
    console.log('Left arrow clicked');
    console.log(position)
    if (position < slidesCount - tilesToDisplay) {
        positionPX -= 280;
        slider.style.left = positionPX + "px";
        position++;
        arrowRight.style.opacity = "1";
    }
    if (position === slidesCount - tilesToDisplay) {
        arrowLeft.style.opacity = "0";
    }
});


arrowRight.addEventListener('click', () => {
    console.log('Right arrow clicked');
    console.log(position)
    if (position > 0) {
        positionPX += 280;
        slider.style.left = positionPX + "px";
        position--;
        arrowLeft.style.opacity = "1";
    }
    if (position === 0) {
        arrowRight.style.opacity = "0";
    }
})

