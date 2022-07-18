var load;

function loadFunc() {
  load = setTimeout(showPage, 5000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}

const navMenu = document.getElementById('nav-menu'), 
toggleMenu = document.getElementById('toggle-menu'), 
closeMenu = document.getElementById('close-menu');

toggleMenu.addEventListener('click',() => {
    navMenu.classList.toggle('show');
});
closeMenu.addEventListener('click',() => {
    navMenu.classList.remove('show');
});