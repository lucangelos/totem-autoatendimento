function atualizarData() {
    const agora = new Date();

    //Data completa
    const dia = agora.getDate();
    const mes = agora.getMonth()+1;
    const ano = agora.getFullYear();

    const dataCompleta = `${dia}/${mes}/${ano}`;

    //Horário completo
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    horas = horas.toString().padStart(2, "0");
    minutos = minutos.toString().padStart(2, "0");
    segundos = segundos.toString().padStart(2, "0");

    const horaFormatada = `${horas}:${minutos}:${segundos}`;

    const span = document.querySelector(".date");
    const horario = document.querySelector(".hour");

    span.textContent = dataCompleta;
    horario.textContent = horaFormatada;
}

//Atualiza sempre
atualizarData();

//Atualiza a cada segundo
setInterval(atualizarData, 1000);