// Creo array di immagini
const immaginiSlide = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
console.log(immaginiSlide);

// Inserisco dinamicamente gli elementi Immagine senza la classe active per non renderli visibili
const slider = document.querySelector(".items")
let sliderString = "";
for (let i = 0; i < immaginiSlide.length; i++){
    console.log(immaginiSlide[i]);
    
    sliderString += `<div class="item">
<img src="${immaginiSlide[i]}" alt="">
</div>`
}
console.log(sliderString);

slider.innerHTML = sliderString + `<div class="prev"></div>
<div class="next"></div>`;
// Visualizzo il primo elemento Immagine
const activeImmagine = document.querySelectorAll(".item");
let activeImmagineIndex = 0;
activeImmagine[activeImmagineIndex].classList.add("active");

// Imposto le condizioni eventListner
document.querySelector(".next").addEventListener("click", function(){
    if (activeImmagineIndex < activeImmagine.length - 1) {
        activeImmagine[activeImmagineIndex].classList.remove("active");
        activeImmagineIndex++;
        activeImmagine[activeImmagineIndex].classList.add("active")
    }
})

document.querySelector(".prev").addEventListener("click", function(){
    if (activeImmagineIndex > 0) {
        activeImmagine[activeImmagineIndex].classList.remove("active");
        activeImmagineIndex--;
        activeImmagine[activeImmagineIndex].classList.add("active")
    }
})


