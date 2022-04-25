//selectors
const allInputs = document.querySelectorAll("input");
const btn = document.querySelector("button");

//documentElement used to pick the :root thing from "css"
const changeVar= () => {
  const unit = this.dataset.size || "";
  document.documentElement.style.setProperty
  (
    `--${this.name}`,
    this.value + unit
  );
}

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