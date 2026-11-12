const botaoTema = document.getElementById('btn-tema');
const body = document.body;

const temaSalvo = localStorage.getItem('PortifolioTema');

if (temaSalvo === 'dark') {
    body.classList.add('dark-theme');
    botaoTema.innerText = '☀️ Modo Claro';
}

botaoTema.addEventListener('click', function() {

    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        botaoTema.innerText = '☀️ Modo Claro';
        localStorage.setItem('PortifolioTema', 'dark');
    } else {
        botaoTema.innerText = '🌙 Modo Escuro';
        localStorage.setItem('PortifolioTema', 'light');

    }
});