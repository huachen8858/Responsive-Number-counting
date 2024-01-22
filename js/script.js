const valueDisplays = document.querySelectorAll(".num");
const interval = 3000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0
  const endValue = parseInt(valueDisplay.getAttribute("data-val"))
  const duration = Math.floor(interval / endValue);
  const counter = setInterval(function () {
    startValue +=1
    valueDisplay.textContent = startValue
    if(startValue == endValue) {
      clearInterval(counter)
    }
  }, duration)
});
