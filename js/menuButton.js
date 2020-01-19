let btn = document.getElementById("menuBtn");
let menu = document.getElementById("menu");
let displayShow = function() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    for (let i = 0; i < menuElements.length; i++){
      menuElements[i].classList.remove("showMenuEl");
      menuElements[i].classList.add("displayNone");
    }

    btn.blur();
  } else {
    menu.classList.add("showMenu");
    for (let i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.add("showMenuEl");
      menuElements[i].classList.remove("displayNone");


    }
  }
};
let menuElements = document.getElementsByClassName("menuEl");
btn.addEventListener("click", displayShow);

btn.addEventListener("focusout",()=>{setTimeout(()=>{
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    for (let i = 0; i < menuElements.length; i++){
      menuElements[i].classList.remove("showMenuEl");
      menuElements[i].classList.add("displayNone");
    }

    btn.blur();
}},100)});
