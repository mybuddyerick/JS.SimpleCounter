let count = 0;

const counterDisplay = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const clearBtn = document.getElementById('clear');

function updateCounter() {
    counterDisplay.textContent = count;
}

addBtn.addEventListener('click', () => {
    count += 1;
    updateCounter();
});

subBtn.addEventListener('click', () => {
    count -= 1;
    updateCounter();
});

clearBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});