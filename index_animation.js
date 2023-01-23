const createIcon = () => {
  const dolarIcon = document.createElement("i");
  dolarIcon.classList.add("dolarIcon");
  dolarIcon.textContent = "$";
  const main = document.querySelector("main");
  main.prepend(dolarIcon);
  dolarIcon.style.left = Math.random() * window.innerWidth + "px";
  dolarIcon.style.animationDuration = Math.random() * 80 + 50 + "s";
  dolarIcon.style.opacity = Math.random();
  setTimeout(() => {
    dolarIcon.remove();
  }, 4000);
};

setInterval(createIcon, 100);
