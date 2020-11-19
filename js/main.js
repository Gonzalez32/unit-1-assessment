// C-E-R  
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const inputNum = document.getElementById('inputNumber');
const renderNum = document.getElementById('renderNumber');

// create E-L on plusBtn and minusBtn

plusBtn.addEventListener('click', (event) => {
    // console.log(event.target.value)
    renderNum.value = parseInt(renderNum.value) + parseInt(inputNum.value);
});

minusBtn.addEventListener('click', (event) => {
    // console.log(event)
    renderNum.value = parseInt(renderNum.value) - parseInt(inputNum.value);
});
