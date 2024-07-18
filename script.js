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
}
makeGrid(16);

// Change Color on mouse over

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.background = 'brown';
    });
});

