function createSVG() {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const colors = [ "blue", "pink", "green", "black", "orange", "purple", "yellow", "red"];
  
  function createCirlce(cx, cy, r, color) {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", cx);
      circle.setAttribute("cy", cy);
      circle.setAttribute("r", r);
      circle.setAttribute("fill", color);
      return circle
  }

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", windowWidth);
  svg.setAttribute("height", windowHeight);

  document.body.appendChild(svg);

  let i = windowWidth * 2;
  let colorPicker = 0;
  while (i > 0) {
    colorPicker = colorPicker % 8;
    const circle = createCirlce(windowWidth / 2, windowHeight, i, colors[colorPicker]);
    colorPicker++;
    i -= 12;
    svg.appendChild(circle);
  }

  i = windowWidth * 0.40;
  while (i > 0) {
    colorPicker = colorPicker % 8;
    const circle = createCirlce(0, 0, i, colors[colorPicker]);
    colorPicker++;
    i -= 12;
    svg.appendChild(circle);
  }

  i = windowWidth * 0.65;
  while (i > 0) {
    colorPicker = colorPicker % 8;
    const circle = createCirlce(windowWidth, 0, i, colors[colorPicker]);
    colorPicker++;
    i -= 12;
    svg.appendChild(circle);
  }
}
createSVG();
  
window.addEventListener("resize", () => {
  document.querySelector("svg").remove();
  createSVG();
});
  