const text = "ReverseSec is a dedicated team of security researchers focused on enhancing software security within the windows architecture. Our mission is to identify and report vulnerabilities safeguarding software against emerging threats. We are committed to delivering robust defenses that protect users and organizations, ensuring a secure digital landscape.";
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
        setTimeout(typeEffect, 35);
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
