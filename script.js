//Preloader function
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preload-finish');
});
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // Parallax
  var bg = document.getElementById("bg");
			var moon = document.getElementById("moon");
			var mountain = document.getElementById("mountain");
			var road = document.getElementById("road");
			var main_title = document.getElementById("main_title");

			window.addEventListener("scroll", function () {
				var value = window.scrollY;

				bg.style.top = value * 0.5 + "px";
				moon.style.left = -value * 0.5 + "px";
				mountain.style.top = -value * 0.15 + "px";
				road.style.top = value * 0.206 + "px";
				main_title.style.top = value * 0.5 + "px";
			});

      const swiper = new Swiper(".swiper-container", {
				speed: 500,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				centeredSlides: true,
				paginationClickable: true,
				watchSlidesProgress: true,
				loop: true,
				slidesPerView: 2,
				spaceBetween: 30,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			});
      var slideIndex = 0;
showSlides();
