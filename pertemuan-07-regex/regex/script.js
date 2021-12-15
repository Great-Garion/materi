// let say = "45678Teess"

// 1. Ribet
// for (let i = 0; i < say.length; i++){
//   if (say[i] == "o") {
//     console.log("true");
//   }
// }

// 2. 
// console.log(say.includes("oOO123"));

// literal
let regex1 = /[a-z]/

// new obj
let regex2 = new RegExp(["[a-z][5-9]"])

let test = regex2.test("d3")
console.log(test);


