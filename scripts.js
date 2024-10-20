let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  const totalSlides = slides.length;
  currentIndex = (index + totalSlides) % totalSlides; // Permitir looping infinito
  const offset = -currentIndex * 100;
  document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Navegar automaticamente a cada 5 segundos
setInterval(nextSlide, 5000);
