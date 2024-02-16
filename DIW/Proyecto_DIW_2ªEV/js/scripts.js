// Script para inicializar Masonry
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el contenedor de las imágenes
    var grid = document.querySelector('.galeria-container');
  
    // Inicializa Masonry
    var masonry = new Masonry(grid, {
      // Opciones, si es necesario
      itemSelector: '.col-lg-3', // Selector de los elementos de la cuadrícula
      columnWidth: '.col-lg-3', // Selector del ancho de la columna
      percentPosition: true // Usa porcentajes para las posiciones
    });
  });
  
  // Script para abrir el modal con la imagen correspondiente
  function openModal(imageSrc) {
    var modalImage = document.getElementById('modal-img');
    modalImage.src = imageSrc;
    var modal = new bootstrap.Modal(document.getElementById('imagenModal'));
    modal.show();
  }
  