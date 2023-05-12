const navigationButtons = document.querySelectorAll('.navigation-button');
const slidingImages = document.querySelector('.sliding-images');

function changeSlide(index) {
  const percentage = index * -20;
  slidingImages.style.transform = `translateX(${percentage}%)`;
  
  // Update active navigation button
  navigationButtons.forEach((button, i) => {
    if (i === index) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}