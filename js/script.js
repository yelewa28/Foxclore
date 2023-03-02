window.onscroll = () => {
  if (window.scrollY >= 600) {
    document.querySelector(".scroll-button").style.cssText = "display: flex;";
  } else {
    document.querySelector(".scroll-button").style.cssText = "display: none;";
  }
};
document.querySelector(".scroll-button").addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
