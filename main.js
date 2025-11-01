
/* Consts */

const hamburgerMenu = document.querySelector('#hamburger-menu');
const closeBtn = document.querySelector('#close-btn');
const navbar = document.querySelector('#navbar');
const cursosBtn = document.querySelector('#cursosbtn');
const cursosUl = document.querySelector('#cursos-ul');
const herramientasBtn = document.querySelector('#herramientasbtn');
const herramientasUl = document.querySelector('#herramientas-ul');
const cursosBtnArrow = document.querySelector('#cursos-btn-arrow');
const herramientasBtnArrow = document.querySelector('#herramientas-btn-arrow');



/* Functions */

hamburgerMenu.addEventListener('click', () => {
  navbar.style.display = 'block';
  hamburgerMenu.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  navbar.style.display = 'none';
  hamburgerMenu.style.display = 'block';
});

cursosBtn.addEventListener('click', () => {

  cursosUl.style.display = (cursosUl.style.display === 'block') ? 'none' : 'block';
  
  cursosBtnArrow.style.transition = 'transform 0.3s ease';
  cursosBtnArrow.style.transform = (cursosBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';

})

herramientasBtn.addEventListener('click', () => {
  herramientasUl.style.display = (herramientasUl.style.display === 'block') ? 'none' : 'block';

  herramientasBtnArrow.style.transition = 'transform 0.3s ease';
  herramientasBtnArrow.style.transform = (herramientasBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
})



/* Fixing errors */
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    navbar.style.display = 'block';
    hamburgerMenu.style.display = 'none';
  } else {
    navbar.style.display = 'none';
    hamburgerMenu.style.display = 'block';
  }
});