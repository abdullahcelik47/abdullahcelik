// Navbar'a scroll ile gölge ekle
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('shadow');
  }
});

// Sayfa başına dön butonu ekle
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '↑';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '30px';
scrollBtn.style.right = '30px';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = '999';
scrollBtn.className = 'btn btn-primary rounded-circle';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', function() {
  scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// (Duplicate block removed)
// Navbar'a scroll ile gölge ekle
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('shadow');
  }
});


/**
 * Button element created to be used as a scroll button in the UI.
 * @type {HTMLButtonElement}
 */
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '↑';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '30px';
scrollBtn.style.right = '30px';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = '999';
scrollBtn.className = 'btn btn-primary rounded-circle';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', function() {
  scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Navbar linklerinde aktiflik animasyonu
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// İletişim kartına animasyon efekti (örnek: hafif sallanma)
const contactCard = document.querySelector('.modern-contact-card');
if (contactCard) {
  contactCard.addEventListener('mouseenter', () => {
    contactCard.style.transform = 'scale(1.04) rotate(-1deg)';
    contactCard.style.transition = 'transform 0.3s cubic-bezier(.25,.8,.25,1)';
  });
  contactCard.addEventListener('mouseleave', () => {
    contactCard.style.transform = 'scale(1) rotate(0)';
  });
}
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('beni-taniyin-btn');
  if (btn) {
    btn.addEventListener('click', function() {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const aboutParagraphs = document.querySelectorAll('#about-paragraphs .about-fadein');
  let delay = 0;
  aboutParagraphs.forEach((p, i) => {
    setTimeout(() => {
      p.classList.add('visible');
    }, delay);
    delay += 900; 
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const aboutParagraphs = document.querySelectorAll('#about-paragraphs .about-fadein');
  let delay = 0;
  aboutParagraphs.forEach((p) => {
    setTimeout(() => {
      p.classList.add('visible');
    }, delay);
    delay += 900; // Her paragraf arasında 0.9 saniye gecikme
  });
});