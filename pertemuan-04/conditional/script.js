let lampu = "hijau"

switch (lampu) {
  case "hijau":
    console.log("jalan");
    break;
  case "kuning":
    console.log("hati-hati");
    break;
  case "merah":
    console.log("berhenti");
    break;
  default:
    console.log("rusak");
    break;
}

// conditional    ?      true            :     false
lampu === "hijau" ?
  console.log("jalan") :
  console.log("berhenti");


// terdapat 3 variabel
// a = 10
// b = 5
// max = 0
// isi lah variabel max dengan nilai terbesar

let a = 10
let b = 5
let max = 0

// let max ?   :   

a > b ? max = a : max = b
console.log(max);