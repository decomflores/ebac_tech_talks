AOS.init();

const dataEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contadorTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const difEvento = timeStampEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minEmMs = 1000 * 60;

    const dias = Math.floor(difEvento / diaEmMs);
    const horas = Math.floor((difEvento % diaEmMs) / (horaEmMs));
    const minutos = Math.floor((difEvento % horaEmMs) / minEmMs);
    const segundos = Math.floor((difEvento % minEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (difEvento < 0) {
        clearInterval(contadorTempo);
        document.getElementById('contador').innerHTML = `Evento EXPIRADO`;
    }

}, 1000)
