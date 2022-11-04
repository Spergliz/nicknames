let containerE1 = document.getElementById("container");
let inputE1 = document.getElementById("input");
let inputE2 = document.getElementById("input2");
document.getElementById("button").addEventListener("click",gay);
let Names = ["placehold", "placehold2", "placehold3"];

function randomint(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}
function gay(){
containerE1.innerHTML = "<div>" + Names[randomint(0, 3)] + "</div>";
}
//