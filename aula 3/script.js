const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")

function time(){
    const dataAtual = new Date()
    const hora = dataAtual.getHours()
    const minuto = dataAtual.getMinutes()
    const segundo = dataAtual.getSeconds()
    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;

    // console.log(dataAtual) pra fazer log
}

setInterval(time,1000);
time()

