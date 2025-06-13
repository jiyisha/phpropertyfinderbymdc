// Slideshow functionality
document.querySelectorAll('.slideshow').forEach(slideshow => {
  const images = slideshow.querySelectorAll('img');
  if (images.length > 0) {
    let current = 0;
    images[current].classList.add('active');
    
    setInterval(() => {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    }, 3000);
  }
});

// Scroll buttons functionality
const scroller = document.querySelector('.companies-scroller');
const scrollLeft = document.querySelector('.scroll-btn.left');
const scrollRight = document.querySelector('.scroll-btn.right');

scroller.addEventListener('scroll', () => {
  scrollLeft.style.display = scroller.scrollLeft > 0 ? 'flex' : 'none';
});

scrollLeft.addEventListener('click', () => {
  scroller.scrollBy({ left: -300, behavior: 'smooth' });
});

scrollRight.addEventListener('click', () => {
  scroller.scrollBy({ left: 300, behavior: 'smooth' });
});