const area = new URLSearchParams(window.location.search).get('area')
console.log(area)

// const area = new URLSearchParams(window.location.search).get('area')
// console.log(area)

fetch('data.json')
.then((res)=>res.json())
.then((data)=>console.log(data))