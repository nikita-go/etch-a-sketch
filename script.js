const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "#1f1f1f"

const grid = document.querySelector('.container');
const clearBtn = document.querySelector('.clearbtn');
const sizeSlider = document.querySelector('.choosesize');
const sizeValue = document.querySelector('.currentsize');
const colorPicker = document.querySelector('.colorpicker');

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;

sizeSlider.onmousemove = (e) => updateSize(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);
clearBtn.onclick = () => clearGrid();
colorPicker.oninput = (e) => setColor(e.target.value);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size*size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', changeColor);
        grid.appendChild(square);
    }
}

function setColor(color) {
    currentColor = color;
}

function changeColor(e) {
    if (e.type==='mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = currentColor;
}

function clearGrid() {
    grid.innerHTML = '';
    createGrid(currentSize);
}

function changeSize(size) {
    currentSize = size;
    updateSize(size);
    clearGrid();
}

function updateSize(size) {
    sizeValue.innerHTML = `${size} x ${size}`;
}

createGrid(DEFAULT_SIZE)
