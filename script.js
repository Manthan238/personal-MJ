// ============================
// Dark / Light Mode
// ============================

const themeBtn = document.getElementById("theme-btn");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", ()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme","light");
    }else{
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme","dark");
    }

});

// ============================
// Typing Animation
// ============================

const words = [
    "Web Developer",
    "Frontend Developer",
    "UI Designer",
    "Future Full Stack Developer"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    if(!typing) return;

    currentWord = words[wordIndex];

    if(!isDeleting){

        typing.textContent = currentWord.substring(0,charIndex++);
        
        if(charIndex > currentWord.length){
            isDeleting = true;
            setTimeout(typeEffect,1200);
            return;
        }

    }else{

        typing.textContent = currentWord.substring(0,charIndex--);

        if(charIndex < 0){
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect,isDeleting ? 50 : 100);

}

typeEffect();

// ============================
// Scroll Reveal
// ============================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el)=>{
    observer.observe(el);
});

// ============================
// Scroll Progress Bar
// ============================

window.addEventListener("scroll",()=>{

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress = (scrollTop/scrollHeight)*100;

    document.getElementById("progress-bar").style.width =
    progress + "%";

});

// ============================
// Back To Top Button
// ============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// ============================
// Active Navbar Link
// ============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

// ============================
// Particles Animation
// ============================

tsParticles.load("particles-js", {
  background: {
    color: {
      value: "transparent"
    }
  },
  particles: {
    number: {
      value: 80
    },
    color: {
      value: "#38bdf8"
    },
    links: {
      enable: true,
      color: "#38bdf8",
      distance: 150
    },
    move: {
      enable: true,
      speed: 2
    },
    size: {
      value: 3
    },
    opacity: {
      value: 0.6
    }
  }
});

// ============================
// Live Clock
// ============================

function updateClock(){
    const clockElement = document.getElementById("clock");
    if(clockElement){
        const now = new Date();
        clockElement.textContent = now.toLocaleTimeString();
    }
}
setInterval(updateClock,1000);
updateClock();

// ============================
// Greeting
// ============================

const greetingElement = document.getElementById("greeting");
if(greetingElement){
    const hour = new Date().getHours();
    if(hour<12){
        greetingElement.innerHTML="Good Morning ☀️";
    }
    else if(hour<18){
        greetingElement.innerHTML="Good Afternoon 🌤️";
    }
    else{
        greetingElement.innerHTML="Good Evening 🌙";
    }
}

// ============================
// Counter
// ============================

function counter(id,target){

    let count=0;

    const interval=setInterval(()=>{

        count++;

        const element = document.getElementById(id);
        if(element){
            element.innerHTML = count + "+";
        }

        if(count>=target){
            clearInterval(interval);
        }

    },50);

}

const projectsCountElement = document.getElementById("projectsCount");
const skillsCountElement = document.getElementById("skillsCount");

if(projectsCountElement){
    counter("projectsCount",10);
}

if(skillsCountElement){
    counter("skillsCount",4);
}

// ============================
// Copy Email
// ============================

const copyEmailButton = document.getElementById("copyEmail");
if(copyEmailButton){
    copyEmailButton.onclick = () => {
        navigator.clipboard.writeText("manthanjatkar27@gmail.com");
        alert("Email Copied!");
    };
}
