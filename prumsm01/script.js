const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const title = document.getElementById('slideTitle');
    const description = document.getElementById('slideDescription');

    function goToSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
      });

      slides[index].classList.add('active');
      dots[index].classList.add('active');

      title.textContent = slides[index].getAttribute('data-title');
      description.textContent = slides[index].getAttribute('data-description');
    }