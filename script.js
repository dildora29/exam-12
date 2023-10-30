"use strict";

let pOne = document.querySelector(".pOne");
let pTwo = document.querySelector(".pTwo");
let pThree = document.querySelector(".pThree");

let box1 = document.querySelector(".simple-text");
let box2 = document.querySelector(".speedy-text");
let box3 = document.querySelector(".easy-text");

pOne.addEventListener("click", () => {
  box1.classList.remove("hidden");
  box2.classList.add("hidden");
  box3.classList.add("hidden");
});

pTwo.addEventListener("click", () => {
  box2.classList.remove("hidden");
  box1.classList.add("hidden");
});

pThree.addEventListener("click", () => {
  box2.classList.add("hidden");
  box3.classList.remove("hidden");
});

let plus1 = document.querySelector(".plusOne");
let minus1 = document.querySelector(".minusOne");
let textss1 = document.querySelector(".textss1");
let textss2 = document.querySelector(".textss2");
let textss3 = document.querySelector(".textss3");
let textss4 = document.querySelector(".textss4");

// let minus = document.querySelector(".bi-patch-minus");
// let plus = document.querySelector(".bi-patch-plus");
//////////////////////////1111111111111
plus1.addEventListener("click", () => {
  textss1.classList.remove("hidden");
  textss2.classList.add("hidden");
  textss3.classList.add("hidden");
  textss4.classList.add("hidden");
  plus1.style.display = "none";
  minus1.style.display = "inline-block";

  minusTwo.style.display = "none";
  plusTwo.style.display = "inline-block";
  minusThree.style.display = "none";
  plusThree.style.display = "inline-block";
  minusFour.style.display = "none";
  plusFour.style.display = "inline-block";
});

minus1.addEventListener("click", () => {
  textss1.classList.add("hidden");
  minus1.style.display = "none";
  plus1.style.display = "inline-block";
});
//////////////////////////////2222222222222222
let plusTwo = document.querySelector(".plusTwo");
let minusTwo = document.querySelector(".minusTwo");

plusTwo.addEventListener("click", () => {
  textss1.classList.add("hidden");
  textss2.classList.remove("hidden");
  textss3.classList.add("hidden");
  textss4.classList.add("hidden");
  plusTwo.style.display = "none";
  minusTwo.style.display = "inline-block";

  minus1.style.display = "none";
  plus1.style.display = "inline-block";
  minusThree.style.display = "none";
  plusThree.style.display = "inline-block";
  minusFour.style.display = "none";
  plusFour.style.display = "inline-block";
});

minusTwo.addEventListener("click", () => {
  textss2.classList.add("hidden");
  minusTwo.style.display = "none";
  plusTwo.style.display = "inline-block";
});
////////////////////////////////3333333333333
let plusThree = document.querySelector(".plusThree");
let minusThree = document.querySelector(".minusThree");

plusThree.addEventListener("click", () => {
  textss1.classList.add("hidden");
  textss2.classList.add("hidden");
  textss3.classList.remove("hidden");
  textss4.classList.add("hidden");
  plusThree.style.display = "none";
  minusThree.style.display = "inline-block";

  minus1.style.display = "none";
  plus1.style.display = "inline-block";
  minusTwo.style.display = "none";
  plusTwo.style.display = "inline-block";
  minusFour.style.display = "none";
  plusFour.style.display = "inline-block";
});

minusThree.addEventListener("click", () => {
  textss3.classList.add("hidden");
  minusThree.style.display = "none";
  plusThree.style.display = "inline-block";
});
////////////////////////////44444
let plusFour = document.querySelector(".plusFour");
let minusFour = document.querySelector(".minusFour");

plusFour.addEventListener("click", () => {
  textss1.classList.add("hidden");
  textss2.classList.add("hidden");
  textss3.classList.add("hidden");
  textss4.classList.remove("hidden");
  plusFour.style.display = "none";
  minusFour.style.display = "inline-block";

  minus1.style.display = "none";
  plus1.style.display = "inline-block";
  minusTwo.style.display = "none";
  plusTwo.style.display = "inline-block";
  minusThree.style.display = "none";
  plusThree.style.display = "inline-block";
});

minusFour.addEventListener("click", () => {
  textss4.classList.add("hidden");
  minusFour.style.display = "none";
  plusFour.style.display = "inline-block";
});
