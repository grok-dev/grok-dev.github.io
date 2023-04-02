var prevScrollpos = window.pageYOffset;
const arrowPos = document.getElementById("scroll-down-arrow").style.bottom;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;

  // you're at the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    document.getElementById("scroll-down-arrow").style.bottom = "-100px";
  } else if (!document.getElementById("scroll-down-arrow").style.bottom == arrowPos) {
    document.getElementById("scroll-down-arrow").style.bottom = arrowPos;
  }
};
