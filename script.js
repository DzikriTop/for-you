function showThanks() {
    const nameInput = document.getElementById('nameInput').value;
    const nameDisplay = document.getElementById('nameDisplay');
    const customMessage = document.getElementById('customMessage');

    if (nameInput) {
        nameDisplay.innerText = nameInput;
        customMessage.innerText = `Thank you, ${nameInput}, for being the best! I love you so much!`;
        customMessage.style.display = 'block';
    } else {
        alert("Please enter your love's name!");
    }
}
