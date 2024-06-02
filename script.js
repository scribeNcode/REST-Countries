const countriesWrapper = document.querySelector('.countries-card-wrappers')

fetch('data.json')
.then((res)=>{
    if(!res.ok){
        console.error(res.json())
    }
    return res.json()
})
.then((countries)=>{
    let display = countries.map((country, index)=>{
        return `<a href="./detailedPage.html?index=${index}">
        <div class="card">
            <img src="${country.flags.svg}" alt="" srcset="">
            <div class="text-div">
            <p>Population :${country.population} </p>
            <p>Region:${country.region}</p>
            <p>Capital:${country.capital}</p>
            </div>
        </div>
        </a>`
    })
    countriesWrapper.innerHTML = display.join(' ')
})