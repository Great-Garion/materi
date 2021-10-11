import {kartu} from './data.js'

console.log(kartu)

let nama1 = "thoriq"
let nama2 = "faizal"

console.log(nama1 + " nur " + nama2 )
// template literal string
console.log(`${nama1} nur ${nama2}`)

let num1 = 10;
let num2 = 20;
console.log(`${num1} + ${num2}`)

function addNumber (){
  console.log('tes')
}

const addNumber2 = () => {
  num1 === 10 ? true : false
}

const murid = {
  nama: 'Yeyen',
  city: 'Sumbawa'
}

console.log(murid.nama)
// object destructuring
const {nama} = murid

console.log(nama)

let [siswa1, siswa2, siswa3, siswa4] = ['Ardi', 'Rangga', 'Delila', 'Yhido']

siswa1 = 'Ardii'
console.log(siswa1)
console.log(siswa3)

const tambahMurid = (nama, kota) => {
  const newMurid= {newNama: nama, newKota: kota}

  console.log(newMurid)
}

tambahMurid('Rangga', 'Sumbawa')

let angka = [1,2,3,4,5,6,7,8]
let angka10 = [...angka, 'Yeyen', 'Rangga']

console.log(angka10)


const tambahAngka = (...angka) => {
  return angka.reduce((a, b) => a + b)
}

console.log(tambahAngka(1,2,3,4))
console.log(tambahAngka(1,2,3,4,5,6,7,8))

const greeting = (nama = 'Anonym') => {
  return `selamat datang ${nama}`
}

console.log(greeting())

const pangkat = (angka = 0) => {
  return angka * angka
}
console.log(pangkat(10))
console.log(pangkat(5))
console.log(pangkat())

const url = 'https://jsonplaceholder.typicode.com/posts'

const getAPI = async() =>{
  let response = await fetch(url)
  response = await response.json()
  console.log(response)
}
getAPI()
