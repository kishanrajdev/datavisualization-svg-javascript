function createSVG() {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  function createLine(x1, y1, x2, y2) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", "3");
    return line;
  }

  function createRectangle(x, y, width, height) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    return rect;
  }

  function createTriangle() {
    const polygonPoints = `${windowWidth / 4} ${windowHeight / 4}, ${windowWidth * 3 / 4} ${windowHeight / 4}, ${windowWidth / 2} ${windowHeight * 3 / 4}`;
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", polygonPoints);
    return polygon;
  }

  function createMask() {
    const mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
    mask.setAttribute("id", "triangle-mask");

    const rect = createRectangle(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
    rect.setAttribute("fill", "black");

    const triangle = createTriangle();
    triangle.setAttribute("fill", "white");

    mask.appendChild(rect);
    mask.appendChild(triangle);
    return mask;
  }

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", windowWidth);
  svg.setAttribute("height", windowHeight);

  document.body.appendChild(svg);

  let i = 0;
  while (i < windowHeight) {
    i += 10;
    const line = createLine(0, i, windowWidth, i);
    svg.appendChild(line);
  }

  const mask = createMask();
  svg.appendChild(mask);

  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  group.setAttribute("mask", "url(#triangle-mask)");
  const gRectangle = createRectangle(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
  gRectangle.setAttribute("fill", "white");
  group.appendChild(gRectangle);

  const triangle = createTriangle();  // this triangle is for defining border
  triangle.setAttribute("fill", "white");
  triangle.setAttribute("stroke", "#6F0AD5");
  triangle.setAttribute("stroke-width", "8");
  group.appendChild(triangle);

  i = windowWidth / 4;
  while (i < (windowWidth * 3) / 4) {
    i += 10;
    const line = createLine(i, windowHeight / 4, i, (windowHeight * 3) / 4);
    group.appendChild(line);
  }
  svg.appendChild(group);
}
createSVG();

window.addEventListener("resize", () => {
  document.querySelector("svg").remove();
  createSVG();
});
