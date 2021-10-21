const arr = [1, 2, 3];

const search = (arr, num) => {
  if (arr[arr.length - 1] == num) {
    return `angka di temukan pada index ke ${arr.length - 1}`
  } 
  
  if (arr.length == 1) {
    return `data tidak ditemukan`
  }


  arr.pop()
  return search(arr, num)
}

console.log(search(arr, 2))