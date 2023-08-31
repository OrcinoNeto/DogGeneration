const botaoFetch = window.document.getElementById('botaoFetch')
const resultado = document.getElementById('resultado')

botaoFetch.addEventListener('click', ()=>{
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res =>{return res.json()})
    // .then(data => resultado.innerHTML = `<img src="${data.message}"/>`)
    .then(data => data.message.map((foto)=> {
        resultado.innerHTML += `<img src=${foto} />`
    }) )
    .catch(error => resultado.innerHTML = `<h1>Erro</h1>`)

})




