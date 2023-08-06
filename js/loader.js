let loader = document.querySelector(".loader");
let content = document.querySelector(".main-content");

$(document).ready(() => {
  setTimeout(() => {
    loader.style.display = "none";
    content.style.opacity = "1";
  }, 1000);
});
