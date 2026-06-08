// ================= NEW: SCROLL REVEAL LOGIC =================

function revealOnScroll() {
    // 1. Revelar Títulos isolados
    const titulos = document.querySelectorAll('.secao-titulo, .contact-titulo');
    titulos.forEach(tit => {
        const rect = tit.getBoundingClientRect();
        // Ativa quando o elemento atinge 85% da altura da janela
        if (rect.top <= window.innerHeight * 0.85) {
            tit.classList.add('active');
        }
    });

    // 2. Revelar grupos de itens com efeito Cascata (Grid de vídeos e Contactos)
    const containers = document.querySelectorAll('.gallery-container, .contact-tab');
    
    containers.forEach(container => {
        const rect = container.getBoundingClientRect();
        
        if (rect.top <= window.innerHeight * 0.85) {
            const itens = container.querySelectorAll('.card, .contact-card');
            itens.forEach((item, index) => {
                // index * 150ms cria o efeito sequencial (um surge logo após o outro)
                setTimeout(() => {
                    item.classList.add('active');
                }, index * 100);
            });
        }
    });
}

// Escuta o movimento do scroll na página
window.addEventListener('scroll', revealOnScroll);

// Executa assim que a página carrega para revelar o que já está visível logo no topo
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(revealOnScroll, 300);
});

// ================= INTERATIVIDADE DO MENU RESPONSIVO =================

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

// 1. Abre e fecha o menu ao clicar no botão Hamburguer
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// 2. Fecha o menu automaticamente quando clicares em qualquer link (Scroll)
links.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});