function atualizarData() {
    const agora = new Date();

    //meses em pt-BR
    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio",
        "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    //Data completa
    const dia = agora.getDate();
    const mes = meses[agora.getMonth()];
    const ano = agora.getFullYear();

    const dataCompleta = `${dia} de ${mes} de ${ano}`;
    console.log(dataCompleta);

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