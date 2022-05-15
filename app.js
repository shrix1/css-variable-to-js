//selectors
const allInputs = document.querySelectorAll("input");
const btn = document.querySelector("button");

//documentElement used to pick the :root thing from "css"
//e is evnet top grab the input addEventListener Event
const changeVar = (e) => {
  const targetEl = e.target;
  const unit = targetEl.dataset.size || "";
  document.documentElement.style.setProperty(
    `--${targetEl.name}`,
    targetEl.value + unit
  );
};

allInputs.forEach((inp) => {
  inp.addEventListener("input", changeVar);
  //input event used to get a value from slider
});

//just for random image
let i = 1;
btn.addEventListener("click", () => {
  if (3 >= i) {
    document.changeImg.src = `./images/image${i}.jpg`;
    i++;
  } else {
    i = 1;
  }
});
