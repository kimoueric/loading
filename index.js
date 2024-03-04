let containerLaoding = document.querySelector(".loading-container");
let progression = document.querySelector(".progress");
let percent = document.getElementById("percent");

let load = false;
let percentCount = 0;
const laoding = setInterval(() => {
  if (percentCount < 101) {
    progression.style.width = percentCount + "%";
    percent.textContent = percentCount;
    percentCount++;
  } else if (load) {
    containerLaoding.style.opacity = 0;
    clearInterval(interval);

    setTimeout(() => {
      containerLaoding.style.display = "none";
    }, 450);
  }
}, 10);

window.addEventListener("load", () => {
  console.log("Chargé !!");
  load = true;

  clearInterval(laoding);

  percent.textContent = 100;
  progression.style.width = 100 + "%";
  containerLaoding.style.opacity = 0;

  setTimeout(() => {
    containerLaoding.style.display = "none";
  }, 450);
});
