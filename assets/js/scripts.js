document.querySelector(".hamburger-menu").addEventListener("click" , () => {
    const navlinks = document.querySelector("header nav ul");
    navlinks.classList.toggle("active");
})


let currectIndex = 0;
const images = document.querySelectorAll(".slider-images img");
const totalImages = images.length;

function showNextImage(){
    currectIndex = (currectIndex + 1 )% totalImages;
    updateSlider();
}

function updateSlider(){
    const slider = document.querySelector(".slider-images")
    slider.style.transform =  `translateX(-${currectIndex * 100}%)` ;
}

setInterval(showNextImage , 3000);