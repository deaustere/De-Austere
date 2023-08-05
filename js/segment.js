let segment1 = document.querySelector("#segment1");
let segment2 = document.querySelector("#segment2");
let segment3 = document.querySelector("#segment3");
let segment4 = document.querySelector("#segment4");
let segment5 = document.querySelector("#segment5");
let segment6 = document.querySelector("#segment6");

segment1.addEventListener("click", () => {
  setTimeout(() => {
    $("#JiSlider1").JiSlider({ color: "#fff", start: 1, reverse: true });
  }, 100);
});
segment2.addEventListener("click", () => {
  setTimeout(() => {
    $("#JiSlider2").JiSlider({ color: "#fff", start: 1, reverse: true });
  }, 100);
});
segment3.addEventListener("click", () => {
  setTimeout(() => {
    $("#JiSlider3").JiSlider({ color: "#fff", start: 1, reverse: true });
  }, 100);
});
segment4.addEventListener("click", () => {
  setTimeout(() => {
    $("#JiSlider4").JiSlider({ color: "#fff", start: 1, reverse: true });
  }, 100);
});
segment5.addEventListener("click", () => {
  setTimeout(() => {
    $("#JiSlider5").JiSlider({ color: "#fff", start: 1, reverse: true });
  }, 100);
});
segment6.addEventListener("click", () => {
  setTimeout(() => {
    $("#JiSlider6").JiSlider({ color: "#fff", start: 1, reverse: true });
  }, 100);
});
