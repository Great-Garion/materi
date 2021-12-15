// callback = func yg dijadikan sebagai argumen
let API_GITHUB = "https://api.github.com/users/auzanassdq"

// promise
function getDataPromise(API) {
  fetch(API)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);

    let headingName = document.querySelector("#name")
    headingName.innerHTML = result.name
  })
}
getDataPromise(API_GITHUB)

// async await
// const getDataAyncAwait = async (API) => {
//   const response = await fetch(API)
//   const result = await response.json()

//   console.log(result); // {}
//   let headingName = document.querySelector("#name")
//   headingName.innerHTML = result.name
// }
// getDataAyncAwait(API_GITHUB)



let API_POST = "https://jsonplaceholder.typicode.com/posts"

const getPost = async (API) => {
  const response = await fetch(API)
  const result = await response.json()

  console.log(result); // [ {}, {}, {}]

  const postList = document.querySelector("#post-list") // ul
  result.forEach((item) => {
    console.log(item);
    postList.innerHTML += `<li>${item.title}</li>`
  })
}
getPost(API_POST)