/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu =document.getElementById('nav-menu');
const navToggle =document.getElementById('nav-toggle'),
      navClose =document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
   navToggle.addEventListener('click',()=>{
      navMenu.classList.add('show-menu');
   })
}
/* Validate if constant exists */
if(navClose){
   navClose.addEventListener('click',()=>{
      navMenu.classList.remove('show-menu');
   })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/
const  tabs =document.querySelector('[data-target]'),
      tabContents =document.querySelectorAll('[data-content]')
tabs.forEach(tab=>{
   tab.addEventListener('click',()=>{
      const target = document.querySelector(tab.dataset.target)

      tabContents.forEach(tabContent=>{
         tabContent.classList.remove('qualification__active')
      })
      target.classList.add('qualification__active')

      tab.forEach(tab=>{
         tab.classList.remove('qualification__active') 
      })
      tab.classList.add('qualification__active')
   })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
modalBtns= document.querySelectorAll('.services__button'),
modalCloses = document.querySelectorAll('.services__modal-close');
let modal =function(modalClick){
   modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i)=>{
   modalBtn.addEventListener('click',()=>{
      modal(i)
   })
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
       modalViews.forEach((modalView)=>{
          modalView.classList.remove('active-modal')
       })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}


// application
var speed = 75;
var h1 = document.querySelector('.home__subtitle');
var p = document.querySelector('.home__description');
var delay = h1.innerHTML.length * speed + speed;

// type affect to header
typeEffect(h1, speed);


// type affect to body
setTimeout(function(){
  p.style.display = "inline-block";
  typeEffect(p, speed);
}, delay);
