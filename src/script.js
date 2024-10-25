let display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = "";
}
function delDisplay() {
  display.value = display.value.slice(0, -1);
}
function calculate() {
  try {
    let result = eval(display.value);
    if (display.value === "2+2") {
      alert("Wow, such calculation, much math!");
      //clear input field after 2 sec
      setTimeout(() => (display.value = ""), 1000);
    } else if (display.value === "1+1") {
      alert("Yes, it's 2. You're a math genius! Are you trying to break me?");
      setTimeout(() => (display.value = ""), 1000);
    } else if (display.value === "3*3") {
      alert("It's 9! Are you planning to build a square?");
      setTimeout(() => (display.value = ""), 1000);
    } else if (display.value === "5-3") {
      alert("Correct! You get a gold star for subtracting!");
      setTimeout(() => (display.value = ""), 1000);
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Error";
  }
}
document.addEventListener("keydown", function (event) {
  const key = event.key;
  if ("0123456789+-*/.".includes(key)) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    event.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    delDisplay();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
function setColorScheme(scheme) {
  const app = document.getElementById("app");
  const buttons = document.querySelectorAll("#key button");
  const operatorButtons = document.querySelectorAll("#key button.operator");
  if (scheme === "black") {
    app.style.background = "#1e1e1e";
    display.style.background = "#333333";
    display.style.color = "#ffffff";
    buttons.forEach((button) => {
      button.style.background = "#c0c0c0d8";
      button.style.color = "#000";
    });
    operatorButtons.forEach((button) => {
      button.style.background = "#ff8800";
    });
  } else if (scheme === "pink") {
    app.style.background = "#ff69b4";
    display.style.background = "#ffb6c1";
    display.style.color = "#ffffff";
    buttons.forEach((button) => {
      button.style.background = "#ff6eb4";
      button.style.color = "#ffffff";
    });
    operatorButtons.forEach((button) => {
      button.style.background = "#ff1493";
    });
  }
}
