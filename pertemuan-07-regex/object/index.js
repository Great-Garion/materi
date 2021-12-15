let person = {
  isVaccinated: true,
  name: 'Skilvul',
  age: 5,
  fullName: 'Skilvul coding bootcamp'
}

console.log(person.age)

// tapi jika kita merubah sebagian secara langsung melalui KEY, diperbolehkan
person.age = 6

console.log(person.age)
console.log(person['age'])

person.school = 'high school'
person.school = 'bachelor'

console.log(person);

person = {
  isVaccinated: false,
  name: 'Super skilvul',
  // age: 7
}

console.log(person)

delete person.isVaccinated
console.log(person)
// dengan const kita tidak diizinkan merubah dengan curly braces
// person = {
//   name: 'Super skilvul',
// }

// cara membuat method
const greeting = {
  welcome: function(){
    return 'Halo semua'
  },
  afterTransaction: function() {
    return 'Terima kasih sudah berbelanja'
  }
}

console.log(greeting.welcome())
console.log(greeting.afterTransaction())

const mentor = {
  thoriq: {
    name: 'thoriq',
    age: 17
  },
  auzan: {
    name: 'Auzan',
    age: 17
  }
}

console.log(mentor)

const number = {
  A: 10,
  B: 20,
}



function changeData(obj){
  obj.A = 19,
  obj.B = 29
}

console.log(number)
changeData(number)
console.log(number)

number.A = 30
console.log(number)

const news = {
  title: "Skilvul Coding Bootcamp",
  description: "Semua murid Skilvul jago coding",
  description2: "Semua murid"
}

for(let data in news){
  console.log(news[data])
}

let student = [
  {
    name: 'Yeyen',
    fullName: 'Yeyen Tri Utami'
  },
  {
    name: 'Inayat'
  },
  {
    name: 'Yhido'
  },
  {
    name: 'Delilla'
  },
  {
    name: 'Ardi'
  },
]

console.log(student)

student.forEach((allStudent) => {
  console.log(allStudent)
})