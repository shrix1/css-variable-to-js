const allInputs = document.querySelectorAll("input");
const btn = document.querySelector("button");

function changeVar() {
  const unit = this.dataset.size || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + unit
  );
}

allInputs.forEach((inp) => {
  inp.addEventListener("input", changeVar);
});

let i = 1;
btn.addEventListener("click", () => {
  if (3 >= i) {
    document.changeImg.src = `./images/image${i}.jpg`;
    i++;
  } else {
    i = 1;
  }
});