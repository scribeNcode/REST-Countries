const detailsWrapper = document.querySelector('.more')

const index = new URLSearchParams(window.location.search).get('index')
console.log(index)

let url = 'data.json'

fetch('data.json')
.then((res)=>{
    if(!res.ok){
        console.error(res.json())
    }
    return res.json()
})

.then((data)=>{
    let detailed = data[index]
    console.log(detailed)
    let display =  `        <img src="${detailed.flags.svg}" alt="" srcset="">
    <h1>${detailed.name}</h1>
    <p>Native name:${detailed.nativeName}</p>
    <p>Population:${detailed.population}</p>
    <p>Region:${detailed.region}</p>
    <p>Sub region:${detailed.subregion}</p>
    <p>Capital:${detailed.capital}</p>`
    detailsWrapper.innerHTML = display
})

