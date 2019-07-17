// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const arrow = document.getElementById("arrow-down");

// Set Initial stat of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
disappear();

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    //Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    //Set menu state
    showMenu = false;
  }
}

/*function disappear(){
const tall = 6;

  if(tall < 5){
    arrow.style.visibility = 'hidden';  
  }else{
  arrow.style.visibility = 'visible'; 
  }

}*/
