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
        return `<div class="card">
        <img src="" alt="" srcset="">
        <p>Population : </p>
        <p>Region:</p>
        <p>Capital:</p>
    </div>`
    })
    countriesWrapper.innerHTML = display
})