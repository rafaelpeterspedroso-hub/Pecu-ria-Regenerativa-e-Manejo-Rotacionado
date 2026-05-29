document.addEventListener('DOMContentLoaded', () => {
    const btnTradicional = document.getElementById('btn-tradicional');
    const btnRotacionado = document.getElementById('btn-rotacionado');
    const cardImpacto = document.getElementById('card-impacto');
    const cardTitle = document.getElementById('card-title');
    const cardText = document.getElementById('card-text');
    const cardIcon = cardImpacto.querySelector('.card-icon');

    btnTradicional.addEventListener('click', () => {
        // Atualiza o estado visual dos botões
        btnTradicional.classList.add('active');
        btnRotacionado.classList.remove('active');

        // Atualiza o conteúdo e cor do Card para o modo Tradicional
        cardImpacto.classList.remove('success');
        cardImpacto.style.borderLeftColor = '#dd6b20';
        cardImpacto.style.backgroundColor = '#fffaf0';
        cardIcon.textContent = '⚠️';
        cardTitle.textContent = 'Modelo Tradicional (Pastoreio Contínuo)';
        cardText.textContent = 'O gado fica livre em uma grande área. Isso causa superpastoreio, compactação do solo, degradação da pastagem e baixa capacidade de retenção de água, além de liberar mais carbono na atmosfera.';
    });

    btnRotacionado.addEventListener('click', () => {
        // Atualiza o estado visual dos botões
        btnRotacionado.classList.add('active');
        btnTradicional.classList.remove('active');

        // Atualiza o conteúdo e cor do Card para o modo Sustentável
        cardImpacto.classList.add('success');
        cardImpacto.style.borderLeftColor = '#16a34a';
        cardImpacto.style.backgroundColor = '#f0fdf4';
        cardIcon.textContent = '🌱';
        cardTitle.textContent = 'Manejo Rotacionado (Pecuária Regenerativa)';
        cardText.textContent = 'O pasto é dividido em piquetes. O gado consome o capim no momento ideal e muda de área, dando tempo para as raízes crescerem, o solo descansar e acumular matéria orgânica, capturando carbono e retendo muito mais água.';
    });
});
