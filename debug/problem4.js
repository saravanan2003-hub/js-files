checkNumber(-5);
checkNumber(0);
checkNumber(10, 20);
function checkNumber(num) {//miss the flower brackets and change the symbol
  if (num < 0){
    console.log("Negative");
  }
  else if (num >0) {
    console.log("Positive");
  } 
  else {
    console.log("Zero");
  }
}