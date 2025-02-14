// access the image
let slideImage = document.querySelectorAll("img");
// access the next and previous button
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".preview");
// access the indicator
let indicators = document.querySelectorAll(".dot");
let counter = 0;
let imagecounter;

//function for the next button
nextBtn.addEventListener("click", slideNext);
function slideNext() {
  slideImage[counter].style.animation = "next1 0.5s ease-in forwards";
  updateActiveIndicator();
  if (counter >= slideImage.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImage[counter].style.animation = "next2 0.5s ease-in forwards";
  updateActiveIndicator();
}

prevBtn.addEventListener("click", slidePrev);
function slidePrev() {
  slideImage[counter].style.animation = "prev1 0.5s ease-in forwards";
  updateActiveIndicator();
  if (counter === 0) {
    counter = slideImage.length - 1;
  } else {
    counter--;
  }
  slideImage[counter].style.animation = "prev2 0.5s ease-in forwards";
  updateActiveIndicator();
}

//auto image slider
function autoSliding() {
  imagecounter = setInterval(slideNext, 3000);
}
autoSliding();
//stop auto sliding image
const container = document.querySelector(".slide-container");
container.addEventListener("mouseover", () => {
  clearInterval(imagecounter);
});
// resume auto slider
container.addEventListener("mouseout", autoSliding);
// update active indicator
function updateActiveIndicator() {
  indicators.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === counter) {
      dot.classList.add("active");
    }
  });
}
//add click event to the indicator
indicators.forEach((dot) => {
  dot.addEventListener("click", function () {
    indicators.forEach((dot) => dot.classList.remove("active"));
    dot.classList.add("active");

    let imageId = parseInt(dot.getAttribute("attr"), 5);
    if (imageId > counter) {
      slideImage[counter].style.animation = "next1 0.5s ease-in forwards";
      counter = imageId;
      slideImage[counter].style.animation = "next2 0.5s ease-in forwards";
    } else if (imageId < counter) {
      slideImage[counter].style.animation = "prev1 0.5s ease-in forwards";
      counter = imageId;
      slideImage[counter].style.animation = "prev2 0.5s ease-in forwards";
    }
    updateActiveIndicator();
  });
});
