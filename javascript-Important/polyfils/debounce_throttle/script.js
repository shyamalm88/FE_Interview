const btn = document.querySelector("button");
const clickCounter = document.querySelector(".clickCounter");
const triggerCounter = document.querySelector(".triggerCounter");

let clickCount = 0;
let triggerCount = 0;

const debounce = function (callback, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
};

const throttle = function (callback, delay) {
  let flag = true;
  let context = this;
  let args = arguments;
  return function () {
    if (flag) {
      callback.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const triggerCounterfn = function () {
  triggerCounter.innerHTML = triggerCount++;
};

const debouncedTriggerCounter = debounce(triggerCounterfn, 800);
const throttledTriggerCounter = throttle(triggerCounterfn, 800);

btn.addEventListener("click", function () {
  clickCounter.innerHTML = clickCount++;
  throttledTriggerCounter();
});
