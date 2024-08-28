document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username === 'adm' && password === '123') {
            window.location.href = 'menu.html';
        } else if (username === 'leitor' && password === '123') {
            window.location.href = 'menu.html';
        } else {
            alert('Usuário ou senha incorretos.');
        }
    });
});
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
