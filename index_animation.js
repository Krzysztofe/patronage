import {ENG} from './data/variables.js';

const createIcon = () => {
  const dolarIcon = document.createElement("i");
  dolarIcon.classList.add("dolarIcon");
  dolarIcon.textContent = ENG ? "$" : "PLN";
  const main = document.querySelector("main");
  main.prepend(dolarIcon);
  const styles = window.getComputedStyle(main);
  const width = styles.width;
  dolarIcon.style.left = Math.random() * parseInt(width) + "px";
  dolarIcon.style.animationDuration = Math.random() * 80 + 50 + "s";
  dolarIcon.style.opacity = Math.random();
  setTimeout(() => {
    dolarIcon.remove();
  }, 4000);
};

setInterval(createIcon, 150);
