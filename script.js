const text = "ReverseSec -> Coming Soon!";
const typingElement = document.getElementById('typingEffect');
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 75); 
    }
}

typeEffect();
