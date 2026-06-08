document.querySelectorAll('.card').forEach(card => {
    const videoId = card.getAttribute('data-video-id');

    // Usando maxresdefault para alta qualidade (melhor que hqdefault)
    const thumbUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    
    card.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.45)), url('${thumbUrl}')`;

    // Evento de clique para reproduzir o vídeo
    card.addEventListener('click', function() {
        const wrapper = this.querySelector('.video-wrapper');
        
        if (this.classList.contains('playing')) return;

        // Para qualquer outro vídeo que esteja tocando
        document.querySelectorAll('.card.playing').forEach(activeCard => {
            activeCard.classList.remove('playing');
            activeCard.querySelector('.video-wrapper').innerHTML = '';
        });

        // Adiciona o iframe
        wrapper.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>
        `;

        this.classList.add('playing');
    });
});