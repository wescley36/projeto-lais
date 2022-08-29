const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${chave}`
const chave = '9c52f961a168abe1484ae420e3f6cdec'

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    const receba = async()=>{
    const res = await fetch(url)
    const data = res.json()
    
    console.log(data);
    log  
    }
receba()
}
)
