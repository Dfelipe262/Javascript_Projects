document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase()); // pegamos o código do evento passando ele para minusculo. Se clicar em Q por ex, o cod é "keyD" e fica "keyd". Em s, "keyS" e fica "keys"
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if (song !== ''){ //verifica se tem algo digitado dentro do input
        let songArray = song.split(''); // a variavel songArray recebe a string song, que é transformada em um array com espaço vazio entre as palavras, sendo cada palavra um elemento do array
        playComposition(songArray);

    }
})

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`); // pega o elemento de audio do html de acordo com o id
    let keyElement = document.querySelector(`div[data-key ="${sound}"]`); //pega os elementos da div de acordo como "data-key"

    if(audioElement){ // verifica se o audio existe e, toda vez que for reproduzido, será do inicio
        audioElement.currentTime = 0; //o atributo "currentTime" recebe zero
        audioElement.play(); // o metodo .play() é chamado
    }

    if(keyElement){//Se o elemento da tecla existir, uma classe active é adicionada ao elemento, para que seu css mude, e removida depois de 300 milissegundos
        keyElement.classList.add('active')// .Classlist é a lista de classes q esse elemento possui

        setInterval(() => { 
            keyElement.classList.remove('active')
        }, 300);
    }
}

function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray){
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait+=250;  
    }
}

