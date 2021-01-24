window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // TODO: play around with the numbers to get a good-looking result
  (() => {
    document.querySelector(".slide.cover").style.background = `radial-gradient(
    circle at ${50 + Math.random() * 100}%,
    rgb(6, 9, 97),
    #000a30 ${30 + Math.random() * 70}%,
    #0719a2 ${10 + Math.random() * 100}%,
    #000a30 ${10 + Math.random() * 100}%`;
  })();

  document.querySelector("nav").addEventListener("click", function () {
    this.classList.toggle("active");
  });

  const image = document.querySelectorAll("figure img");
  console.log(image);

  const darkSelector = document.querySelectorAll(".mode--dark");

  const body = document.querySelector("body");

  const thesisTitle = document.querySelector(".thesis-title");

  let windowHeight = window.innerHeight;

  let tocButton = document.querySelector(".TOC-button");

  tocButton.addEventListener("click", () => {
    body.classList.remove("dark-mood");
  });

  window.addEventListener("scroll", () => {
    darkSelector.forEach((chapter) => {
      let viewportOffset = chapter.getBoundingClientRect();

      let top = viewportOffset.top;
      let bottom = viewportOffset.bottom;

      let thesisWords = thesisTitle.innerHTML.split(" ");

      // different character style each time

      let newThesisWords = thesisWords.map((word) => {});

      if (top <= windowHeight * 0.3 && top > 0) {
        body.classList.add("dark-mood");
      } else if (top >= windowHeight * 0.3 && top < windowHeight && top > 0) {
        body.classList.remove("dark-mood");
      } else if (bottom <= windowHeight * 0.3 && bottom >= 0) {
        body.classList.remove("dark-mood");
      } else if (bottom >= windowHeight * 0.3 && bottom < windowHeight) {
        body.classList.add("dark-mood");
      }
    });

    image.forEach((item) => {
      let viewportOffset = item.getBoundingClientRect();
      // these are relative to the viewport, i.e. the window
      let top = viewportOffset.top;
      let bottom = viewportOffset.bottom;
      let left = viewportOffset.left;

      if (top <= windowHeight * 0.7) {
        item.classList.add("unblur");
      } else if (top >= windowHeight / 2) {
        item.classList.remove("unblur");
      }

      if (bottom <= windowHeight * 0.3) {
        item.classList.remove("unblur");
      }
    });
  });

  // only unblur the images in the viewport

  // add progress indicator for the reading
});
