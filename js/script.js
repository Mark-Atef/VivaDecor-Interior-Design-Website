// Start of hero section
// Scroll down arrow button
const sections = document.querySelectorAll('section');
const scrollBtn = document.querySelector('.scroll-btn');

if (scrollBtn) {
  scrollBtn.addEventListener('click', e => {
    e.preventDefault();
    const currentScroll = window.scrollY;
    for (let section of sections) {
      if (section.offsetTop > currentScroll + 10) {
        section.scrollIntoView({ behavior: 'smooth' });
        break;
      }
    }
  });
}
// End of hero section

//Start services section
const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isOpen = content.style.maxHeight;

      document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
      document.querySelectorAll('.icons').forEach(icon => icon.textContent = '➕');

      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        header.querySelector('.icons').textContent = '➖';
      }
    });
  });

//End services section


// Start testimonials section
// Testimonial navigation logic (optional - can expand later)
const cards = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

function showCards() {
  cards.forEach((card, idx) => {
    if (idx === currentIndex || idx === currentIndex + 1) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

showCards();

document.querySelector('.testimonial-prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  if (currentIndex === cards.length - 1) currentIndex = cards.length - 2; // edge fix
  showCards();
});

document.querySelector('.testimonial-next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  if (currentIndex === cards.length - 1) currentIndex = 0; // edge fix
  showCards();
});
// End testimonials section


// @media all and (max-width: 575px)

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}