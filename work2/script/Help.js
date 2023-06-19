window.addEventListener("scroll", function () {
  scrollMotion();
});

function scrollMotion() {
  const ele = document.querySelectorAll(".scroll-text");
  let eleOffsetArr = [];

  ele.forEach((e) => {
    let eleOffset = e.getBoundingClientRect().top + window.pageYOffset - 600;
    eleOffsetArr.push(eleOffset);
    console.log(eleOffset);
  });

  eleOffsetArr.forEach((offset, idx) => {
    ele[idx].style.cssText =
      window.scrollY > offset
        ? "opacity:1; transform: translateY(0);"
        : "opacity:0; transform: translateY(10px);";
  });
}
