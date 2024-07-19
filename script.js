// Grid Creation

const container = document.querySelector('#container');

function makeGrid(num) {
    for (i = 0; i < num; i++) {
        for (j = 0; j < num; j++){   
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${100/num}%`;
            container.appendChild(square);
        }
    }
    addHoverEffect();
}
makeGrid(16);

// Change Grid Size
const gridBtn = document.querySelector('#grid-btn');

function changeGridSize() {
    let newNum = parseInt(prompt('Enter new grid dimension, between 1 and 100: '));

    if (newNum < 1 || newNum > 100 || isNaN(newNum)) {
        alert('Grid Size must be between 1 and 100!');
    } else {
        container.innerHTML = '';

        makeGrid(newNum);
    }
}

gridBtn.addEventListener('click', changeGridSize);

// Change Color on mouse over

function addHoverEffect() {
    const squares = document.querySelectorAll('.square');
    const clearBtn = document.querySelector('#clear-btn');

    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
        square.style.background = 'brown';
        });

        clearBtn.addEventListener('click', () => {
            square.style.background = 'white';
        });
    });
;}

