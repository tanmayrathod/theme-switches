const switches = document.getElementsByClassName("switch");
const body = document.body;

const chnageBG = (event) => {
  const style = window?.getComputedStyle(event.target);
  body.style.backgroundColor = style?.backgroundColor;
};

for (el of switches) {
  el?.addEventListener("click", chnageBG);
}
