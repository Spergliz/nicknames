let containerE1 = document.getElementById("container");
let containerE2 = document.getElementById("container2");
let inputE1 = document.getElementById("input");
let inputE2 = document.getElementById("input2");
document.getElementById("button").addEventListener("click", wORK);
document.getElementById("button2").addEventListener("click", wORK2)

let Names = ["Ubuntu user", "Fedora user", "Arch user","Mint user"];

function randomint(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

function wORK() {
  let nickname = Names[randomint(0, 3)];
  let firstname = inputE1.value
  let lastname = inputE2.value

  containerE1.innerHTML = `${firstname} "${nickname}" ${lastname}`
}

function wORK2 (){
  let firstname = inputE1.value
  let lastname = inputE2.value
  let divstr = ``
  for(let i = 0; i< Names.length; i++){
     divstr += `<div> ${firstname} "${Names[i]}" ${lastname}`
  }
  containerE2.innerHTML =divstr 
}
