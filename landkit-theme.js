const menu = document.getElementById("menu");
const list = document.getElementById("nav-list");
menu.addEventListener("click", function (event) {
  console.log("clicked");
  if (list.classList.contains("show-mobile")) {
    list.classList.add("hide-mobile");
    list.classList.remove("show-mobile");
  } else {
    list.classList.add("show-mobile");
    list.classList.remove("hide-mobile");
  }
});
