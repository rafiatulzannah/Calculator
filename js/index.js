function dis(val) {
  let x = document.getElementById("result").value += val;
}

function solve() {
  let displayedValue = document.getElementById("result").value
  let output = eval(displayedValue)
  document.getElementById("result").value = output
}

function clr() {
  document.getElementById("result").value = ""
}

document.addEventListener("keypress",function(event){
  clickOnEqual(event.key);
});

function clickOnEqual(key){
  if(key === "="){
    solve();
  }
}
