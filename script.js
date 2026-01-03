const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

const animatedElements = document.querySelectorAll('.fade-left, .fade-right');

window.addEventListener('scroll', () => {
    animatedElements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            element.classList.add('show');
        }
    });
});

const skillSection = document.querySelector('.skills-section');
const progressBars = document.querySelectorAll('.progress');

window.addEventListener('scroll', () => {
    const sectionTop = skillSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 150) {
        progressBars[0].style.width = '90%';
        progressBars[1].style.width = '85%';
        progressBars[2].style.width = '75%';
        progressBars[3].style.width = '80%';
    }
});

const projectCards = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
    projectCards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            card.classList.add('show');
        }
    });
});
const resumeBtn = document.querySelector('.resume-btn');

resumeBtn.addEventListener('click', () => {
    resumeBtn.innerText = "Downloading...";
    setTimeout(() => {
        resumeBtn.innerText = "Download Resume";
    }, 2000);
});

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        msg.style.color = "red";
        msg.innerText = "Please fill all fields!";
        return;
    }

    msg.style.color = "green";
    msg.innerText = "Message sent successfully!";

    form.reset();
});