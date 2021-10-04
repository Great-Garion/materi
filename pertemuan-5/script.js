let buah = ["jeruk", "mangga", "apel", "rambutan"];
buah.push("duku");
buah.push("naga");

function mencariBuah(x) {
  for (let i = 0; i < buah.length; i++) {
    if (buah[i] === x ) {
      return buah[i]
    }
  }
}

console.log(`${mencariBuah("apel")} manis`); 
console.log(`${mencariBuah("jeruk")} asam`); 
console.log(mencariBuah("jeruk") + " " + "asam" ); 

// selain mangga boleh tampil
// for (let i = 0; i < buah.length; i++) {
//   if (buah[i] !== "mangga" ) {
//     console.log(buah[i]); 
//   }
// }

// buah jeruk, apel, rambuta
// for (let i = 0; i < buah.length; i++){
//   if (buah[i] === "apel" || buah[i] === "jeruk" || buah[i] === "rambutan"){
//     console.log(buah[i]);
//   }
// }

// let angka = 2
// console.log(buah[angka]);
// console.log(buah.length);