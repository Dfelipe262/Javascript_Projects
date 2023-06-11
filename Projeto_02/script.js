let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s'); // pega o ponteiro dos segundos
let mElement = document.querySelector('.p_m'); // pega o ponteiro dos minutos
let hElement = document.querySelector('.p_h'); // pega o ponteiro das horas



function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360/60)*second) - 90; // sDeg => second degree (graus do segundo)
    let mDeg = ((360/60)*minute) - 90; // 60 arcos de 6°. se for 5min, temos 6°.5 = 30°  (6 graus/minuto)
    let hDeg = ((360/12)*hour) - 90; // 12 arcos de 30°. se fo 5h, temos 30°.5 = 150° (30°/hora) (num dia o ponteiro das horas gira 2 vezes)

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time){
     if(time < 10){
        return '0'+time;
     }else{
        return time;
     }
}

//function fixZero(time){return time < 10 ? `0${time}` : time;} Essa é outra forma de fazer essa função fixZero  

setInterval(updateClock, 1000); // chama a função updateClock() a cada 1000 milisegundos (1 segundo). A hora atualiza a cada segundo
updateClock();