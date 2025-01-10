// DOM Elements
const colour = document.querySelector('#random');
const gradColor = document.querySelector('#gradc');
const buttonColor = document.querySelector('.brndm');
const h = document.querySelector('h1');

// Generate a random RGB color
const rndmColor = () => {
  return [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
};

// Check contrast for text color (black/white based on background)
const checkContrast = (color) => {
  const brightness = Math.round(((color[0] * 299) + (color[1] * 587) + (color[2] * 114)) / 1000);
  return brightness > 125 ? 'black' : 'white';
};

// Apply random background color
colour.addEventListener('click', () => {
  const tempColor = rndmColor();
  const newColor = `rgb(${tempColor[0]}, ${tempColor[1]}, ${tempColor[2]})`;
  const textColor = checkContrast(tempColor);

  document.body.style.background = newColor;
  h.style.color = textColor;
  h.innerText = `Background Color: ${newColor}`;
  h.style.textShadow = `2px 2px 5px rgba(${255 - tempColor[0]}, ${255 - tempColor[1]}, ${255 - tempColor[2]}, 0.5)`;
});

// Apply random gradient background color
gradColor.addEventListener('click', () => {
  const color1 = rndmColor();
  const color2 = rndmColor();
  const gradient = `linear-gradient(to right, rgb(${color1[0]}, ${color1[1]}, ${color1[2]}), rgb(${color2[0]}, ${color2[1]}, ${color2[2]}))`;

  document.body.style.background = gradient;
  h.style.color = 'black';
  h.innerText = `Gradient Color: rgb(${color1[0]}, ${color1[1]}, ${color1[2]}) → rgb(${color2[0]}, ${color2[1]}, ${color2[2]})`;
});

// Apply random button background color
buttonColor.addEventListener('click', () => {
  const tempColor = rndmColor();
  const newColor = `rgb(${tempColor[0]}, ${tempColor[1]}, ${tempColor[2]})`;
  const textColor = checkContrast(tempColor);

  buttonColor.style.background = newColor;
  buttonColor.style.color = textColor;
  h.innerText = `Button Background Color: ${newColor}`;
});
