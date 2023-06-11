// Initial data
let square = {
    a1:'', a2:'', a3:'',
    b1:'', b2:'', b3:'',
    c1:'', c2:'', c3:''
}

let player = '';
let warning = '';
let playing = false;

// Events

document.querySelector('.reset').addEventListener('click', reset);
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick);
});

// Functions

function itemClick(event){
    let item = event.target.getAttribute('data-item');
    
    if(square[item] === ''){
        square[item] = player;
        renderSquare();
        togglePlayer();
    }

}


function reset(){
    warning = '';

    let random = Math.floor(Math.random() * 2); // Math.floor() vai arredondar o numero aleatorio que vai ser gerado

    if(random === 0){ // player = (random === 0)? 'x': 'o' (uma outra forma de fazer esse if)
        player = 'x';
    }else{
        player = 'o';
    }

    for(let i in square){ // todos os valores da tabela ficarão vazios
        square[i] = '';
    }

    playing = true;

    renderSquare();
    renderInfo();
}


function renderSquare(){ // todos os itens da tabela html vão receber os valaores que está no objeto square.
    for(let i in square){
        let item = document.querySelector(`div[data-item = ${i}]`); // i será a1, a2... b1, b2... c1, c2, c3 (seleciona os elementos html)
        item.innerHTML = square[i]; // o item html vai receber esse valor
    }

    checkGame();

}


function renderInfo(){
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}


function togglePlayer(){
    if(player === 'x'){ // player = (player === 'x')? 'o': 'x'; (outra maneira de escrever o if)
        player = 'o';
    }else{
        player = 'x';
    }

    renderInfo();
}


function checkGame(){
    if(checkWInnerFor('x')){
        warning = 'O "x" venceu';
        playing = false;
    }else if (checkWInnerFor('o')){
        warning = 'O "o" venceu';
        playing = false;
    }else if(isFull()){
        warning = 'Deu empate!';
        playing = false;
    }
}


function checkWInnerFor(player){
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1'
    ];

    for(let i in pos){
        let pArray = pos[i].split(','); // EX: pArray = [a1,b1,c1]
        let hasWon = pArray.every(option => square[option] === player);
        if(hasWon){
            return true;
        }
    }

    return false
}

/* pArray.every((option)=>{
            if(square[option] === player){
                return true;
            }else{
                return false;
            }

        }); */


function isFull(){
    for(let i in square){ // da um looping por todos os eslementos do tabuleiro. Se houver um vazio, retorna falso (não preenchido)
        if(square[i] ===  ''){
            return false;
        }
    }
    return true; // se pessou pelo for inteiro e todos os elementos estavam preenchidos, retorna true
}