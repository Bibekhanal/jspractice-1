//javascript t toggle menu visible
const menubar = document.getElementById("menubar");
const menu = document.getElementById("menu");

menubar.addEventListener("click",function(){
    menu.classList.toggle("visible");

});
