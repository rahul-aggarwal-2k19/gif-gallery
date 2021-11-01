footerBottomFix();
window.addEventListener("resize", footerBottomFix);
function footerBottomFix() {
  let header = document.querySelector(".header").offsetHeight;
  let footer = document.querySelector(".footer").offsetHeight;
  let main = document.querySelector(".main");
  let wh = window.innerHeight;
  let totalHeight = wh - header - footer;
  main.style.minHeight = totalHeight + "px";
}
