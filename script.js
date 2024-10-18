function showMessage(color) {
    let messageBox = document.getElementById('messageBox');

    if (color === 'Red') {
        messageBox.innerHTML = "Stop!";
        messageBox.style.backgroundColor = '#FF0000';
        messageBox.style.color = '#b14040';
    } else if (color === 'Yellow') {
        messageBox.innerHTML = "Get Ready!";
        messageBox.style.backgroundColor = '#FFFF00';
        messageBox.style.color = '#b14040';
    } else if (color === 'Green') {
        messageBox.innerHTML = "Go!";
        messageBox.style.backgroundColor = '#00FF00';
        messageBox.style.color = '#b14040';
    }
}
