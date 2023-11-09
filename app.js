const buttons = document.querySelectorAll('button');    
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent; 
        const inputBox = document.getElementById('inputbox'); 

        if (buttonText === 'C') {
            inputBox.value = '0'; 
        } else if (buttonText === '=') {
            inputBox.value = eval(inputBox.value);
        } else if (buttonText === 'DEL') {
            inputBox.value = inputBox.value.slice(0, -1);
        } else {
            if (inputBox.value === '0') {
                inputBox.value = buttonText;
            } else {
                inputBox.value += buttonText;
            }
        }
    });
});
