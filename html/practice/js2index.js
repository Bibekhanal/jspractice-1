document.getElementById("h1").innerHTML = "Cloud Nepal";
document.getElementsByClassName("h2")[0].innerHTML = "Clouds Nepal";
document.getElementsByTagName("P")[0].innerHTML = "lorem";
let data = document.getElementsByTagName("span");

//attribute
// document.getElementById("att").style.color="red";
// document.getElementById("att").style.fontStyle="normal";

Object.assign(document.getElementById("att").style, {
  color: "red",
  fontStyle: "normal",
  fontSize: "30px",
});
Object.assign(document.getElementById("myLink"), {
  href: "https://www.google.com",
  target: "blank",
  style: "color:gray; text-decoration:none; font-size:30px; display:block",
});
//event
// document.addEventListener("DOMContentLoaded", function () {
//   const clickButton = document.getElementById("clickButton");
//   const message = document.getElementById("message");

//   clickButton.addEventListener("click", function () {
//     message.textContent = "button Clicked";
//   });
// });
const clickButton = document.getElementById("ClickButton");
const message = document.getElementById("message");
// clickButton.addEventListener("click", data);
// function data() {
//   message.textContent = "Button Clicked";
// }
clickButton.addEventListener(
    "click",
    ()=>(message.innerHTML="Button Clicked")
);

// clickButton.addEventListener("mouseover", function () {
//   message.textContent = "Button Mouse Hover";
// });
clickButton.addEventListener(
    "mouseover",
    ()=>(message.innerHTML="Button Mouse")
);


// clickButton.addEventListener("mouseout", function () {
//     message.textContent = "";
//   });
clickButton.addEventListener(
    "mouseout",
    ()=>(message.innerHTML="")
);

  