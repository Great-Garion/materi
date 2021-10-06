let API = "https://digimon-api.vercel.app/api/digimon"

const getDigimon = async (API) => {
  const response = await fetch(API)
  let result = await response.json()

  console.log(result) // [{}, {}] 200

  // kecilin data jadi 20
  result = result.filter((item, index) => {
    if (index < 20) return item
  })

  // ambil container div
  const digimonList = document.querySelector(".list-digimon") // div
  
  // looping untuk di tampilkan
  result.forEach(item => {
    // console.log(item)
    digimonList.innerHTML += `
      <div class="col">
        <div class="card border border-primary">
          <img src=${item.img} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.level}</p>
          </div>
        </div>
      </div>
    `
  })
}

getDigimon(API)