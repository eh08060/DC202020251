window.addEventListener("scroll", function () {
  var element = document.querySelector(".scroll-text");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("show");
  } else {
    element.classList.remove("show");
  }
});
