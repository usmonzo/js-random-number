let generateBtn = document.getElementById("generate");

function randomNumber() {
  let min = document.getElementById("min");
  let max = document.getElementById("max");
  let minValue = Number(min.value);
  let maxValue = Number(max.value);
  // console.log(minValue, maxValue);
  if (minValue > maxValue) {
    minValue = maxValue + minValue;
    maxValue = minValue - maxValue;
    minValue = minValue - maxValue;
    minValue = minValue;
    maxValue = maxValue;
  }
  let num = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  //   console.log(num);
  document.getElementById("result").innerText = num;
}
window.addEventListener("load", randomNumber());
generateBtn.addEventListener("click", randomNumber);
