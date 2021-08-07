let screen = document.querySelector("#screen");
let buttons = document.querySelectorAll("button");
var ans = "";

for (let items of buttons) {
  items.addEventListener("click", (e) => {
    var buttonValue = e.target.innerText;
    if (buttonValue == "C") {
      screen.value = "";
      ans = "";
    } else if (buttonValue == "X") {
      buttonValue = "*";
      ans = ans + buttonValue;
      screen.value = ans;
    } else if (buttonValue == "=") {
      screen.value = eval(ans);
    } else if (buttonValue == "Del") {
      ans = ans.substring(0, ans.length - 1);
      screen.value = ans;
    } else {
      ans = ans + buttonValue;
      screen.value = ans;
      console.log(ans.substring(0,ans.length-1)/ans.slice(-1));
    }
  });
}

var window = document.addEventListener("keypress", (e) => {
  console.log(e.key);
  var keyValue = e.key;
  if (keyValue == "C" || keyValue == "c") {
    screen.value = "";
    ans = "";
  } else if (keyValue == "X") {
    keyValue = "*";
    ans = ans + keyValue;
    screen.value = ans;
  } else if (keyValue == "=" || keyValue == "Enter") {
    screen.value = eval(ans);
  } else if (keyValue == "Del" || keyValue == "d") {
    ans = ans.substring(0, ans.length - 1);
    screen.value = ans;
  } else {
    ans = ans + keyValue;
    screen.value = ans;
    console.log(ans);
  }
});
