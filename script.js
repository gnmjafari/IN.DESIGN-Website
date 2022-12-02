var slide = document.getElementsByClassName("contianer-slider_box-slide");
var dot = document.getElementsByClassName("dot");
var prev = document.querySelector(".contianer-slider_button-prev");
var next = document.querySelector(".contianer-slider_button-next");
var y = window.matchMedia("(min-width: 1200px)");
var x = window.matchMedia("(min-width: 845px)");
var z = window.matchMedia("(max-width: 845px)");
console.log(slide.length);
var n = 0;
console.log(n);

next.addEventListener("click", function () {
  n++;
  if (n > slide.length + 1 && y.matches) {
    n = 0;
  }
  if (n > slide.length + 3 && x.matches) {
    n = 0;
  }
  if (n > slide.length - 1 && z.matches) {
    n = 0;
  }
  if (n <= slide.length / 2 && y.matches) {
    for (i = 0; i < slide.length; i++) {
      slide[i].classList.remove("active");
    }
    for (i = 0; i < dot.length; i++) {
      dot[i].classList.remove("dot-active");
    }
    slide[n].classList.add("active");
    slide[n + 1].classList.add("active");
    slide[n + 2].classList.add("active");
    console.log(n);
    dot[n].classList.add("dot-active");
    dot[n + 1].classList.add("dot-active");
    dot[n + 2].classList.add("dot-active");
  } else if (slide.length / 2 < n && y.matches) {
    for (i = 0; i < slide.length; i++) {
      slide[i].classList.remove("active");
    }
    for (i = 0; i < dot.length; i++) {
      dot[i].classList.remove("dot-active");
    }
    slide[n - 2].classList.add("active");
    slide[n - 3].classList.add("active");
    slide[n - 4].classList.add("active");
    console.log(n);
    dot[n - 2].classList.add("dot-active");
    dot[n - 3].classList.add("dot-active");
    dot[n - 4].classList.add("dot-active");
  } else if (n - 1 <= slide.length / 2 && x.matches) {
    for (i = 0; i < slide.length; i++) {
      slide[i].classList.remove("active");
    }
    for (i = 0; i < dot.length; i++) {
      dot[i].classList.remove("dot-active");
    }
    slide[n].classList.add("active");
    slide[n + 1].classList.add("active");
    console.log(n);
    dot[n].classList.add("dot-active");
    dot[n + 1].classList.add("dot-active");
  } else if (slide.length / 2 < n && x.matches) {
    for (i = 0; i < slide.length; i++) {
      slide[i].classList.remove("active");
    }
    for (i = 0; i < dot.length; i++) {
      dot[i].classList.remove("dot-active");
    }
    slide[n - 4].classList.add("active");
    slide[n - 5].classList.add("active");
    console.log(n);
    dot[n - 4].classList.add("dot-active");
    dot[n - 5].classList.add("dot-active");
  } else if (n <= slide.length && z.matches) {
    for (i = 0; i < slide.length; i++) {
      slide[i].classList.remove("active");
    }
    for (i = 0; i < dot.length; i++) {
      dot[i].classList.remove("dot-active");
    }
    slide[n].classList.add("active");
    // slide[n + 1].classList.add("active");
    console.log(n);
    dot[n].classList.add("dot-active");
    // dot[n + 1].classList.add("dot-active");
  }
  console.log(y);
  console.log(x);
  console.log(z);
  console.log(slide);
});

prev.addEventListener("click", function () {
  n--;
  if (n < 0 && y.matches) {
    n = slide.length + 1;
  }
  if (n < 0 && x.matches) {
    n = slide.length + 3;
  }
  if (n < 0 && z.matches) {
    n = slide.length - 1;
  }

  if (n <= slide.length / 2 && y.matches) {
    for (i = 0; i < slide.length; i++) {
      slide[i].classList.remove("active");
    }
    for (i = 0; i < dot.length; i++) {
      dot[i].classList.remove("dot-active");
    }
    slide[n].classList.add("active");
    slide[n + 1].classList.add("active");
    slide[n + 2].classList.add("active");
    dot[n].classList.add("dot-active");
    dot[n + 1].classList.add("dot-active");
    dot[n + 2].classList.add("dot-active");
  } else if (slide.length / 2 < n && y.matches) {
    for (i = 0; i < slide.length; i++) {
      slide[i].classList.remove("active");
    }
    for (i = 0; i < dot.length; i++) {
      dot[i].classList.remove("dot-active");
    }
    slide[n - 2].classList.add("active");
    slide[n - 3].classList.add("active");
    slide[n - 4].classList.add("active");
    dot[n - 2].classList.add("dot-active");
    dot[n - 3].classList.add("dot-active");
    dot[n - 4].classList.add("dot-active");
  } else if (n - 1 <= slide.length / 2 && x.matches) {
    for (i = 0; i < slide.length; i++) {
      slide[i].classList.remove("active");
    }
    for (i = 0; i < dot.length; i++) {
      dot[i].classList.remove("dot-active");
    }
    slide[n].classList.add("active");
    slide[n + 1].classList.add("active");
    console.log(n);
    dot[n].classList.add("dot-active");
    dot[n + 1].classList.add("dot-active");
  } else if (slide.length / 2 < n && x.matches) {
    for (i = 0; i < slide.length; i++) {
      slide[i].classList.remove("active");
    }
    for (i = 0; i < dot.length; i++) {
      dot[i].classList.remove("dot-active");
    }
    slide[n - 4].classList.add("active");
    slide[n - 5].classList.add("active");
    console.log(n);
    dot[n - 4].classList.add("dot-active");
    dot[n - 5].classList.add("dot-active");
  } else if (n <= slide.length && z.matches) {
    for (i = 0; i < slide.length; i++) {
      slide[i].classList.remove("active");
    }
    for (i = 0; i < dot.length; i++) {
      dot[i].classList.remove("dot-active");
    }
    slide[n].classList.add("active");
    // slide[n + 1].classList.add("active");
    console.log(n);
    dot[n].classList.add("dot-active");
    // dot[n + 1].classList.add("dot-active");
  }
});
