document.addEventListener('DOMContentLoaded', function() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ12304567890";
    const matrixElements = document.querySelectorAll(".matrix");

    function getRandomCharacter() {
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    function generateMatrixText(columns) {
        let matrixText = "";

        for (let i = 0; i < columns; i++) {
            matrixText += getRandomCharacter() + " ";
        }

        return matrixText;
    }

    function updateMatrix() {
        matrixElements.forEach(matrixElement => {
            const columns = Math.floor(window.innerHeight / 20); // Adjust the number of columns based on height
            const matrixText = generateMatrixText(columns);
            matrixElement.textContent = matrixText;
        });
    }

    // Initial update
    updateMatrix();

    // Update the matrix periodically
    setInterval(updateMatrix, 100);
});


window.addEventListener('load', function() {
    const bioText = document.getElementById('bio-text');
    fadeIn(bioText);
});

function fadeIn(element) {
    let opacity = 0;
    const interval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 100); // Adjust the interval to control the speed of appearance
}
