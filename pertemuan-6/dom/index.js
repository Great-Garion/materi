console.log(document)
console.log(document.title)

console.log(document.getElementById('header').innerHTML)

console.log(document.getElementsByClassName('container')[0].innerHTML)

console.log(document.querySelector('#header'))
console.log(document.querySelector('.container'))


document.querySelector('#header').textContent = 'DOM sudah dirubah'
document.querySelector('.container').innerHTML = '<h1>BELAJAR DOM</h1>'


// menambahkan konten dengan createElement
const containers = document.createElement('h1')
containers.textContent = 'DOM create element'
document.querySelector('.containers').appendChild(containers)

containers.style.backgroundColor = 'red'

const btnEvent = document.querySelector('.btn-event')
btnEvent.addEventListener('click', function(){
  console.log('button di klik')
  alert('Button di klik')
})

// adding blur event input

const input = document.querySelector('#username')
input.addEventListener('blur', function(){
  if(input.value.length < 6) alert('Please enter minimum 6 character')
})

// event submit form

const form = document.querySelector('#form')

form.addEventListener('submit', function(event){
  // mencegah refresh
  event.preventDefault();
  console.log('tesssss')

  const formData = new FormData(form)
  console.log(formData)

  const values = Object.fromEntries(formData).valueOf()
  console.log(values)

  // const values = formData.get(formData)
  // console.log(values)
})