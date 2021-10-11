const getDataAPI = ()  => {
  const API = 'https://jsonplaceholder.typicode.com/users'

  fetch(API)
    .then(response => response.json())
    .then(result => console.log('promise fetch',result))
    .catch(error => console.log('Terjadi error clear cache aplikasi anda'))
}

getDataAPI();

const getDataAPIAsync = async () => {
  const API = 'https://api.github.com/users/yhidotobing'

  let hasil = await fetch(API)
  hasil = await hasil.json()
  console.log('async await hasil',hasil)
}

getDataAPIAsync()


// const proses1 = ()  =>{
//   console.log('proses 1 selesai')
// }

// const proses2 = () => {
//   setTimeout(() => {
//     console.log('proses 2 selesai')
//   }, 5000)
// }

// const proses3 = ()  => {
//   proses1();
//   proses2();
//   console.log('proses 3 selesai')
// }

// proses3()

