let segment1 = document.querySelector("#segment1");
let segment2 = document.querySelector("#segment2");
let segment3 = document.querySelector("#segment3");
let segment4 = document.querySelector("#segment4");
let segment5 = document.querySelector("#segment5");
let segment6 = document.querySelector("#segment6");

let slider1 = false;
let slider2 = false;
let slider3 = false;
let slider4 = false;
let slider5 = false;
let slider6 = false;

segment1.addEventListener("click", () => {
  if (slider1) return;
  setTimeout(() => {
    $("#JiSlider1").JiSlider({ color: "#fff", start: 1, reverse: true });
    slider1 = true;
  }, 100);
});
segment2.addEventListener("click", () => {
  if (slider2) return;
  setTimeout(() => {
    $("#JiSlider2").JiSlider({ color: "#fff", start: 1, reverse: true });
    slider2 = true;
  }, 100);
});
segment3.addEventListener("click", () => {
  if (slider3) return;
  setTimeout(() => {
    $("#JiSlider3").JiSlider({ color: "#fff", start: 1, reverse: true });
    slider3 = true;
  }, 100);
});
segment4.addEventListener("click", () => {
  if (slider4) return;
  setTimeout(() => {
    $("#JiSlider4").JiSlider({ color: "#fff", start: 1, reverse: true });
    slider4 = true;
  }, 100);
});
segment5.addEventListener("click", () => {
  if (slider5) return;
  setTimeout(() => {
    $("#JiSlider5").JiSlider({ color: "#fff", start: 1, reverse: true });
    slider5 = true;
  }, 100);
});
segment6.addEventListener("click", () => {
  if (slider6) return;
  setTimeout(() => {
    $("#JiSlider6").JiSlider({ color: "#fff", start: 1, reverse: true });
    slider6 = true;
  }, 100);
});
