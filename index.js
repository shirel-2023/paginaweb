 // Agrega el script para controlar el carrusel
 const carousel = document.querySelector('.carousel');
 const thumbnails = document.querySelectorAll('.thumbnail');
 const totalImages = document.querySelectorAll('.carousel img').length;
 let currentIndex = 0;

 // Actualiza la posición del carrusel
 function updateCarousel() {
     carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
 }

 // Cambia la imagen cuando se hace clic en la miniatura
 thumbnails.forEach((thumbnail, index) => {
     thumbnail.addEventListener('click', () => {
         currentIndex = index;
         updateCarousel();
     });
 });

 // Automáticamente cambia las imágenes cada 3 segundos
 setInterval(() => {
     currentIndex = (currentIndex + 1) % totalImages;
     updateCarousel();
 }, 3000);