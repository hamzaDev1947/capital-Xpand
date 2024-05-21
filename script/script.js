$(".header-hamburger").click(function () {
  $(this).toggleClass("active");
  $(".header-menu").toggleClass("active");
});

const scrollToTopButton = document.getElementById("scrollToTop");

// Function to check scroll position
function checkScroll() {
  if (window.scrollY > 500) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

// Function to scroll to the top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Add event listener to show/hide the button on scroll
window.addEventListener("scroll", checkScroll);

// Add event listener to scroll to top on button click
scrollToTopButton.addEventListener("click", scrollToTop);

// var vid = document.getElementById("vid");

// function play() {
//   if (vid.paused) vid.play();
//   else vid.pause();
// }
