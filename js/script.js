// Creo array di immagini
const immaginiSlide = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
console.log(immaginiSlide);

// Array Bonus 
const thumbs = document.querySelector(".thumbs");
let thumbsString = "";
console.log(thumbs);
// Inserisco dinamicamente gli elementi Immagine senza la classe active per non renderli visibili
const slider = document.querySelector(".items")
let sliderString = "";
for (let i = 0; i < immaginiSlide.length; i++) {
    thumbsString += `<div class="thumb">
    <img src="${immaginiSlide[i]}" alt="">
</div>`;
    sliderString += `<div class="item">
<img src="${immaginiSlide[i]}" alt="">
</div>`;

}
console.log(sliderString);
console.log(thumbsString);

thumbs.innerHTML = thumbsString + `<div class="prev"></div>
<div class="next"></div>`;
slider.innerHTML = sliderString;
// Visualizzo il primo elemento Immagine
const activeThumb = document.querySelectorAll(".thumb")
const activeImmagine = document.querySelectorAll(".item");
let activeImmagineIndex = 0;
activeThumb[activeImmagineIndex].classList.add("active");
activeImmagine[activeImmagineIndex].classList.add("active");

// Imposto le condizioni eventListner
document.querySelector(".next").addEventListener("click", function () {

    activeImmagine[activeImmagineIndex].classList.remove("active");
    activeThumb[activeImmagineIndex].classList.remove("active");

    if (activeImmagineIndex < activeImmagine.length - 1) {
        activeImmagineIndex++;
        } else  {
        activeImmagineIndex = 0;
    }
    activeImmagine[activeImmagineIndex].classList.add("active")
    activeThumb[activeImmagineIndex].classList.add("active");
})

document.querySelector(".prev").addEventListener("click", function () {
    activeImmagine[activeImmagineIndex].classList.remove("active");
        activeThumb[activeImmagineIndex].classList.remove("active");
    if (activeImmagineIndex > 0) { 
        activeImmagineIndex--;     
    } else {
        activeImmagineIndex = activeImmagine.length - 1;  
    }
    activeThumb[activeImmagineIndex].classList.add("active");
    activeImmagine[activeImmagineIndex].classList.add("active");
})

