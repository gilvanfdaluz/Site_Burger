const menuIcon = document.querySelector('.menu');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');

// Alterna o menu ao clicar no ícone
menuIcon.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Fecha o menu ao clicar em qualquer link do menu
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
    });
});

// Atualiza automaticamente o ano atual no footer
document.getElementById("year").textContent = new Date().getFullYear();

