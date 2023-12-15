const images = [
    { src: "./imagenes/IMAGE_CURSO1.jpg", alt: "Image 1" },
    { src: "./imagenes/IMAGE_CURSO2.jpg", alt: "Image 2" },
    { src: "./imagenes/IMAGE_CURSO3.jpg", alt: "Image 3" },
    { src: "./imagenes/IMAGE_CURSO4.jpg", alt: "Image 4" }
  ];

  
  document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carouselExampleControlsNoTouching');
    carousel.addEventListener('slide.bs.carousel', () => {
      carousel.play();
    });
  });