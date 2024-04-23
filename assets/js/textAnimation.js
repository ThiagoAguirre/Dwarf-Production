const textElement = document.getElementById('text');
const text = ['Efficiency', 'Attractive', 'Agile', 'Built for you!'];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (textIndex < text.length) {
        if (charIndex < text[textIndex].length) {
            textElement.innerHTML += text[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1000);
        }
    } else {
        textIndex = 0;
        setTimeout(type, 1000);
    }
}

function erase() {
    if (textIndex < text.length) {
        if (charIndex >= 0) {
            textElement.innerHTML = text[textIndex].substring(0, charIndex);
            charIndex--;
            setTimeout(erase, 100);
        } else {
            textIndex++;
            charIndex = 0;
            setTimeout(type, 500);
        }
    }
}

type();