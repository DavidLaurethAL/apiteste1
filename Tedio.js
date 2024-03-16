function fetchActivity(){
    CaixaDeInformacao.classList.replace('NaoVisivel', 'Visivel')
    Header.classList.replace('Visivel', 'NaoVisivel')
    botão.style.top = '75%'
    botão.style.transform = 'translate(-50%, -50%)'
    fetch('https://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(data =>{
        console.log(data.Tipo)
        if(data.link){
            fetchActivity.innerHTML = `<span class="poppins">Atividade: </span>
            <a href="${data.link}"><span class="montserrat bold animation">${data.activity}</span>(Aprenda Mais)</a>`
        }else
        Atividade.innerHTML = `<span class="poppins">Atividade:</span><span class="montserrat">${data.Atividade}</span>`
        Tipo.innerHTML = `<span class="poppins">Tipo: </span>
        <span><span class="montserrat">${data.Tipo}</span>`
        Participantes.innerHTML = `<span class="poppins">Participantes: </span>
        <span><span class="montserrat">${data.Participantes}</span>`
        acessibilidade.innerHTML = `<span class="poppins">Acessibilidade: </span>
        <span><span class="montserrat">${data.acessibilidade}</span>`
    })
}
botão.addEventListener('click', fetchActivity)