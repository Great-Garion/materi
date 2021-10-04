import hp from './china.js';
// import batik from './indonesia.js';

let motor = ["yamaha", "honda", "kawasaki", "suzuki"]
let mobil = ["toyota", "mazda", "mitsubishi"]

// console.log("jepang", batik);
console.log("jepang", hp);

// []
// {}
// ""
// 0
// function

// jika cuma 1 aja yg di export
// export default motor

// kalau lebih dari satu
export {motor as motorHokage, mobil as mobilHokage, hp}