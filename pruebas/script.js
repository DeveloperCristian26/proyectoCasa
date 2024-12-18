document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelector('.carousel');
    var isPaused = false;
  
    function nextSlide() {
      if (!isPaused) {
        var currentSlide = carousel.querySelector('.slide.active');
        var nextSlide = currentSlide.nextElementSibling || carousel.firstElementChild;
        currentSlide.classList.remove('active');
        nextSlide.classList.add('active');
      }
    }
  
    setInterval(nextSlide, 3000); // Cambia de diapositiva cada 3 segundos
  
    carousel.addEventListener('mouseenter', function() {
      isPaused = true;
      carousel.classList.add('paused');
    });
  
    carousel.addEventListener('mouseleave', function() {
      isPaused = false;
      carousel.classList.remove('paused');
    });
  });
  