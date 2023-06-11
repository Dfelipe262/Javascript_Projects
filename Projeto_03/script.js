document.querySelector('.busca').addEventListener('submit', async (event)=>{ // pega o formulário de busca e restringe o comportamento padrão que é enviar o form.
    event.preventDefault();

    let input = document.querySelector('#searchinput').ariaValueMax;

    if(input !== ''){
        showWarning('carregando...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=d06cdb298fafc83c520d5ab677fc477e&units=metric&lang=pt_br`

        let results = await fatch(url);
        let json = await results.json();

        if(json === 200){

            showInfo({
                name: jason.name,
                country:jason.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                winAngle: json.wind.deg
            })


        }else{
            showWarning('Não encontramos esta localização...')

        }
    }

});

function showInfo(json){
    showWarning('');

    document.querySelector('.resultado').style.display = 'block';
}

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg;
}