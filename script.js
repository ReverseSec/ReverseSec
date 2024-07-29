const text = "ReverseSec specializes in vulnerability research for Windows applications, focusing on enhancing application security. We identify and address weaknesses within the Windows architecture to protect software from emerging threats and ensure robust defenses for users and organizations!";
const typingElement = document.getElementById('typingEffect');
const contactElement = document.querySelector('.contact');
const contactArrowElement = document.querySelector('.contact-arrow');
const emailElement = document.querySelector('.email');
const teamElement = document.querySelector('.team');
const teamArrowElement = document.querySelector('.team-arrow');
const idkhidden = document.querySelector('.idkhidden');

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    } else {
        contactElement.style.display = 'block'; 
        contactArrowElement.style.display = 'block'; 
        emailElement.style.display = 'block'; 
        teamElement.style.display = 'block'; 
        teamArrowElement.style.display = 'block'; 
        idkhidden.style.display = 'block';
    }
}

setTimeout(typeEffect, 500);
