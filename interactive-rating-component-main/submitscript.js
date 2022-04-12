
function displayMessage(btn) {
    const container = document.querySelector('#selection');
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = `You selected ${btn} out of 5.`;
    container.appendChild(content);
}

displayMessage(2);

