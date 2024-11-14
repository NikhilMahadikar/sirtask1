let attemptCount = 5;
document.getElementById("calculate").addEventListener("click", (e) => {
  e.preventDefault();
  let input1 = parseFloat(document.getElementById("input1").value);
  let input2 = parseFloat(document.getElementById("input2").value);
  let result = document.getElementById("result");

  if (input2 === 0) {
    // if (attemptCount > 1) {
    //   result.innerHTML = `Cannot divide by zero. You have ${attemptCount} attempts left.`;
    //   result.style.color = "red";
    // } else {
    //   result.innerHTML = "You have reached the maximum number of attempts.";
    //   result.style.color = "red";
    //   document.getElementById("calculate").disabled = true;
    //   document.getElementById("calculate").style.opacity = "0.5";
    //   result.style.animation = "textAnimation infinite 0.5s linear alternate";
    // }
    document.getElementById("input2").value = "";
    result.innerHTML = `Cannot divide by zero.`
     result.style.color = "red";
     
  } else if (isNaN(input1) || isNaN(input2)) {
    result.innerHTML = "Please enter valid numbers.";
    result.style.color = "red";
  } else {
    result.innerHTML = input1 / input2;
    attemptCount = 5;
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    result.style.color = "lawngreen";
  }
});
