function addDots() {
  const divs = document.querySelectorAll("div");
  divs.forEach(div => {
    if (!div.textContent.endsWith("...")) {
      div.textContent += "...";
      div.style.backgroundColor = "green";
    }
  });
}
