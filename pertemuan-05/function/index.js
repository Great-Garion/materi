
// function getName(){
//   const nama = "skilvul"
//   console.log(nama)
// }

// getName()
// console.log(nama)

function greeting(){
  return "hello world"
}

console.log(greeting())

function tambah(angka1 = 0, angka2 = 0){
  const result = angka1 + angka2
  return result
}

console.log(tambah(10))

const tambah2 = (angka1 = 0, angka2 = 0) =>{
  const result = angka1 + angka2
  return result
}


function celciusToFahrenheit(celcius) {
  const normalize = celcius * (9/5)
  const fahrenheit = normalize + 32
  return fahrenheit
}

console.log(celciusToFahrenheit(35))

function normalize(celcius){
  return celcius * (9/5)
}

const normalize2 = celcius => celcius * (9/5)

function add32(number){
  return normalize2(number) + 32
}

console.log(add32(30))


// const lowerCase = (string) => {
//   return string.toLowerCase()
// }

const lowerCase = a => a.toLowerCase()


console.log(lowerCase("SKilVul"))
console.log(lowerCase("ThoRIQ"))