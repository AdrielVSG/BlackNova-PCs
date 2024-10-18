// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('BlackNova PCs site carregado com sucesso!');
    
    // Exemplo de interatividade: mudar a cor do logo ao clicar
    const logo = document.querySelector('.logo h1');
    logo.addEventListener('click', () => {
        logo.style.color = logo.style.color === 'rgb(0, 255, 204)' ? '#ff4081' : '#00ffcc';
    });
});

// Placeholder para o botão de comprar
const comprarBtn = document.querySelector('.comprar-btn');
comprarBtn.addEventListener('click', function() {
    alert('Funcionalidade de compra em desenvolvimento.');
});