// Código para o Carrossel
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


// Código para Enviar o Formulário com EmailJS
// Inicialize o EmailJS com a sua Private Key
emailjs.init("8jaj7b3ql0v0j6qPb7ZSA");  // Substitua "sua_private_key" pela sua chave privada

// Função para enviar o formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Evitar o envio tradicional do formulário

  // Enviar o formulário com o EmailJS
  emailjs.sendForm('service_35imb5h', 'template_rx2c5al', this)  // Substitua "service_id" e "template_id"
    .then(function(response) {
      alert('Mensagem enviada com sucesso!');
    }, function(error) {
      alert('Erro ao enviar mensagem. Tente novamente.');
    });
});
