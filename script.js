const svgCanvas = document.getElementById('svgCanvas');
const drawCircleButton = document.getElementById('drawCircle');
const drawRectButton = document.getElementById('drawRect');
const drawEllipseButton = document.getElementById('drawEllipse');
const drawPolylineButton = document.getElementById('drawPolyline');
const drawLineButton = document.getElementById('drawLine');
const rawSVGInput = document.getElementById('rawSVGInput');
const renderSVGButton = document.getElementById('renderSVG');

//Function to creaat and append a circle to the SVG canvas
function drawCircle() {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

// set the attributes for the circle
  circle.setAttribute("cx", Math.random() * 600); //random x position 
  circle.setAttribute("cy", Math.random() * 400); //random y position
  circle.setAttribute("r", 30); // radius of the circle
  circle.setAttribute("fill", "blue"); // fill color

  // append the circle to the SVG canvas 
  svgCanvas.appendChild(circle);
}

// Function to create and append a rectangle to the SVG canvas
function drawRect() {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

  // set the attributes for rectangle 
  rect.setAttribute("x", Math.random() * 550); //random x position
  rect.setAttribute("y", Math.random() * 400); //random y position
  rect.setAttribute("width", 50); // Width of the rectangle 
  rect.setAttribute("height", 50);
  rect.setAttribute("fill", "green"); // fill color
  
  //append the rectangle to the SVG canvas
  svgCanvas.appendChild(rect);
}

function drawEllipse() {
  const ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");

  // set the attributes for ellipse 
  ellipse.setAttribute("cx", Math.random() * 550); //random x position
  ellipse.setAttribute("cy", Math.random() * 400); //random y position
  ellipse.setAttribute("rx", 100); // Width of the ellipse 
  ellipse.setAttribute("ry", 50);
  ellipse.setAttribute("fill", "purple"); // fill color
  
  //append the ellipse to the SVG canvas
  svgCanvas.appendChild(ellipse);
}

function drawLine() {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

  // Set the attributes for the line


  line.setAttribute("x1", Math.random() * 550); // Start x position
  line.setAttribute("y1", Math.random() * 550); // Start y position
  line.setAttribute("x2", Math.random() * 550); // End x position
  line.setAttribute("y2", Math.random() * 550); // End y position

  // Styling
  line.setAttribute("stroke", "red"); // Stroke color
  line.setAttribute("stroke-width", 2); // Stroke width

  // Append the polyline to the SVG canvas
  svgCanvas.appendChild(line);
}

function drawPolyline() {
  const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");

  // Set the attributes for the polyline
  // Points are defined as "x1,y1 x2,y2 x3,y3", etc.

  // Define points
  const points = `${Math.random() * 200},${Math.random() * 500} ${Math.random() * 500},${Math.random() * 500} ${Math.random() * 500},${Math.random() * 500}`;
  polyline.setAttribute("points", points);

  // Styling
  polyline.setAttribute("fill", "none"); // No fill
  polyline.setAttribute("stroke", "yellow"); // Stroke color
  polyline.setAttribute("stroke-width", 2); // Stroke width

  // Append the polyline to the SVG canvas
  svgCanvas.appendChild(polyline);
}

//function to render user inputt raw SVG code
function renderSVG() {
  const rawSVGCode = rawSVGInput.value;

  //Create a temporary wrapper to convert the string into the dom elements 
  const tempWrapper = document.createElement("div");
  tempWrapper.innerHTML = rawSVGCode;

  //Extract the SVG element from the temporary wrapper
  const svgElement = tempWrapper.querySelector('svg');
  if (!svgElement) {
    console.error('No SVG element found in the input.');
    return;
  }
  svgElement.setAttribute('viewBox', `0 0 ${svgCanvas.width.baseVal.value} ${svgCanvas.height.baseVal.value}`);

  //clear THe svg canvas before adding new content
  svgCanvas.innerHTML = '';

  //append the SVG element to the canvas
  svgCanvas.appendChild(svgElement);

  //clear the input field
  rawSVGInput.value = '';
}


//<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
//<!-- Example of a polyline with the default fill -->
//<//polyline points="0,100 50,25 50,75 100,0" />
//
//<!-- Example of the same polyline shape with stroke and no fill -->
//<polyline points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
//</svg>





//event listeners for the button
drawCircleButton.addEventListener('click', drawCircle);
drawRectButton.addEventListener('click', drawRect);
drawEllipseButton.addEventListener('click', drawEllipse);
drawPolylineButton.addEventListener('click', drawPolyline);
drawLineButton.addEventListener('click', drawLine);
renderSVGButton.addEventListener('click', renderSVG)




