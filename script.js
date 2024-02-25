const preLoaderContainer= document.querySelector(".preLoaderContainer");
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
preLoaderContainer.style.display = "none";
  }, 2500);
});

const darkModeBtn= document.querySelector('#darkModeBtn');
const body= document.querySelector('body');
document.addEventListener('DOMContentLoaded', function(){
  if (localStorage.getItem('darkMode')==="enabled"){
    body.classList.add('darkMode');
    darkModeBtn.classList.replace('bx-moon','bx-sun');
  }
  else if(localStorage.getItem('darkMode')==null){
    body.classList.add('darkMode');
    darkModeBtn.classList.replace('bx-moon','bx-sun');                   
  }else{
    body.classList.remove('darkMode');
  }
});
function darkModeToggle(){
  if(localStorage.getItem('darkMode')==="disabled")
  {
    body.classList.add('darkMode');
    darkModeBtn.classList.replace('bx-moon','bx-sun');
  localStorage.setItem('darkMode',"enabled");
}
else{
  body.classList.remove('darkMode');
  darkModeBtn.classList.replace('bx-sun','bx-moon');
  localStorage.setItem('darkMode',"disabled");
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
const submitBtn=document.querySelector('.submitBtn');
submitBtn.addEventListener('click',function(event)
{
  event.preventDefault();
  alert("Couldn't Send Message.");
  document.querySelector('#myForm').reset();
});




// Rotate Text

  let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=>
    `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
).join("");
