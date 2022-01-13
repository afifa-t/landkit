const menu = document.getElementById("menu");
const list = document.getElementById("nav-list");
menu.addEventListener("click", function (event) {
  console.log("clicked");
  if (list.classList.contains("hide-mobile")) {
    list.classList.toggle("header-center-list");
  } else {
    list.classList.toggle("hide-mobile");
  }  
});
