const backgroundImages = document.querySelectorAll('.background-image');
var currentSlideIndex = 0;
var runShow = true;



startShow();

function startShow() {
    console.log('called');
    if (currentSlideIndex < backgroundImages.length) {
        backgroundImages[currentSlideIndex].style.opacity = 1;
        currentSlideIndex++;
    } else {
        currentSlideIndex = 1;
        for (i = 1; i < backgroundImages.length; i++) {
            backgroundImages[i].style.opacity = 0;
        }
    }
    setTimeout(startShow, 5000);
}

function changeSlide() {

}