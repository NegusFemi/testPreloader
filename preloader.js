window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    let percent = 0;
    let interval = setInterval(function () {
      percent++;
      if (percent > 100) {
        clearInterval(interval);
        loader.style.display = "none";
      } else {
        const loaderBar = document.querySelector(".loader-bar");
        const loaderPercent = document.querySelector(".loader-percent");
        loaderBar.style.width = `${percent}%`;
        loaderPercent.textContent = `${percent}%`;
      }
    }, 40);
  });
  