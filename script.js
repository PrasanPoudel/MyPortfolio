const darkModeBtn= document.querySelector('#darkModeBtn');
const body= document.querySelector('body');
document.addEventListener('DOMContentLoaded', function(){
if (localStorage.getItem('darkMode')==="enabled"){
  body.classList.add('darkMode');                   
}else{
  body.classList.remove('darkMode');
}
});
function darkModeToggle(){
if(localStorage.getItem('darkMode')==="disabled")
{
  body.classList.add('darkMode');
  localStorage.setItem('darkMode',"enabled");
  isDark=false;
  console.log('dark mode enabled.')
}
else{
  body.classList.remove('darkMode');
  localStorage.setItem('darkMode',"disabled");
  isDark=true;
  console.log('dark mode disabled.');
}
}
const menu= document.querySelector("#menuBtn");
const navLinks= document.querySelector(".navLinks");
menu.onclick=()=>{
 
  navLinks.classList.toggle("menu_active");
  if(menu.classList.contains("bx-x-circle"))
  {
    menu.classList.replace("bx-x-circle","bx-menu-alt-right" );
  }
  else{
    menu.classList.replace("bx-menu-alt-right", "bx-x-circle" );
  }
  
}
window.onscroll = () => {
  navLinks.classList.remove('menu_active');
  menu.classList.replace("bx-x-circle","bx-menu-alt-right" );
}
const dynamicText = document.querySelector(".typewriter");
const words = ["Frontend Developer","React Js Developer" , "Web Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

function capitalizeFirstLetter(element) {
  element.value = element.value.charAt(0).toUpperCase() + element.value.slice(1);
}

function validateForm() {
  let form = document.getElementById('myForm');
  let elements = form.elements;
  let valid = true;

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].type !== 'button') {
      if (elements[i].value.trim() === '') {
        valid = false;
        elements[i].placeholder = '';
      }
    }
  }

  if (valid) {
    alert('Message Sent Successfully.');
  }
  if(!valid){
    alert("Couldn't Send Message.");
  }
}
