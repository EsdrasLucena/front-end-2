//funcao para atualizar o relogio em tempo real
function updateClock() {
    const now = new Date();
    
    //horario de Brasilia
    const brtNow = new Date(now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));

    const hours = String(brtNow.getHours()).padStart(2, '0');
    const minutes = String(brtNow.getMinutes()).padStart(2, '0');
    const seconds = String(brtNow.getSeconds()).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// atualiza o relogio a cada segundo
setInterval(updateClock, 1000);
updateClock();
