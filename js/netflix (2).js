const formulario = document.querySelector('#formulario')
const resultado = document.querySelector('#resultado')

document.querySelector('#tipo').addEventListener('change', ()=>{
    Array.from(document.querySelectorAll(".gen")).map(e=>{
        e.classList.toggle('remove')
    })
})

formulario.addEventListener('submit', (e)=>{
    const chave = '9c52f961a168abe1484ae420e3f6cdec'
    const genero = document.querySelector('#genero').value
    const numeroPagina = randomiza(1, 10)
    const tipo = document.querySelector('#tipo').value
    const url = `https://api.themoviedb.org/3/discover/${tipo}?api_key=${chave}&page=${numeroPagina}&language=pt-BR`
    e.preventDefault()
    if(tipo==='movie'){
    fetch(url+`&with_genres=${genero}`)
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        console.log(data);
            mostraFilme(data)
    })
    }else{
        fetch(url)
        .then(res=>{
            return res.json()
        })
        .then(data=>{ 
            console.log(data);
                mostraTv(data)
        })  
    }
})

const mostraFilme = (data)=>{
    const idFilme = randomiza(0, 20)
    resultado.innerText=''
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const img = document.createElement('img')
    h2.innerText = data.results[idFilme].title
    p.innerText = data.results[idFilme].overview
    img.setAttribute('src', `https://image.tmdb.org/t/p/w200${data.results[idFilme].poster_path}`)
    resultado.appendChild(h2)
    resultado.appendChild(p)
    resultado.appendChild(img)
}

const mostraTv = (data)=>{
    const idTv = randomiza(0, 20)
    resultado.innerText=''
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const img = document.createElement('img')
    h2.innerText = data.results[idTv].name
    p.innerText = data.results[idTv].overview
    img.setAttribute('src', `https://image.tmdb.org/t/p/w200${data.results[idTv].poster_path}`)
    resultado.appendChild(h2)
    resultado.appendChild(p)
    resultado.appendChild(img)
}

const randomiza = (min, max)=>{
    return Math.floor(Math.random()*(max-min)+min)
}
