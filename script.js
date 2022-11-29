var slide = document.getElementsByClassName("contianer-slider_box-slide");
var dot = document.getElementsByClassName("dot");
var prev = document.querySelector(".contianer-slider_button-prev");
var next = document.querySelector(".contianer-slider_button-next");
console.log(slide.length);

var n = 0;
console.log(n);

next.addEventListener("click", function () {
  if (n < slide.length / 2) {
    slide[n].classList.remove("active");
    slide[n + 3].classList.add("active");

    dot[n].classList.remove("dot-active");
    dot[n + 3].classList.add("dot-active");
  } else if (slide.length / 2 < n <= slide.length) {
    slide[n].classList.remove("active");
    slide[n - 3].classList.add("active");

    dot[n].classList.remove("dot-active");
    dot[n - 3].classList.add("dot-active");
  }

  n++;
  if (n > slide.length - 1) {
    n = 0;
  }
  console.log(n);
  console.log(slide);
});

prev.addEventListener("click", function () {
  n--;
  if (n < 0) {
    n = slide.length - 1;
  }

  if (n < slide.length / 2) {
    slide[n + 3].classList.remove("active");
    slide[n].classList.add("active");

    dot[n + 3].classList.remove("dot-active");
    dot[n].classList.add("dot-active");
  } else if (slide.length / 2 < n <= slide.length) {
    slide[n - 3].classList.remove("active");
    slide[n].classList.add("active");

    dot[n - 3].classList.remove("dot-active");
    dot[n].classList.add("dot-active");
  }

  console.log(n);
  console.log(slide);
});
