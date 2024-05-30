const countriesWrapper = document.querySelector('.countries-card-wrappers')

fetch('data.json')
.then((res)=>{
    if(!res.ok){
        console.error(res.json())
    }
    return res.json()
})
.then((countries)=>{
    let display = countries.map((country)=>{
        return `<a href="./detailedPage.html?area=${country.area}">
        <div class="card">
            <img src="" alt="" srcset="">
            <p>Population :${country.population} </p>
            <p>Region:${country.region}</p>
            <p>Capital:${country.capital}</p>
        </div>
        </a>`
    })
    countriesWrapper.innerHTML = display
})