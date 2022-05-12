const generateBtn = document.querySelector('#generateBtn');
const clearBtn = document.querySelector('#clearBtn');
const lower = document.querySelector('#lower');
const upper = document.querySelector('#upper');
const spanElement = document.querySelector('span');

generateBtn.addEventListener('click', function() {
    const min = Number(lower.value);
    const max = Number(upper.value);
    if (!isNaN(min) && !isNaN(max) && max > min) {
        const number = Math.floor(Math.random() * (max-min) + min);
        spanElement.innerText = number;
    }
    else {
        alert('Enter valid input!');
    }
});
clearBtn.addEventListener('click', function() {
    lower.value = '';
    upper.value = '';
    spanElement.innerText = '';
});
