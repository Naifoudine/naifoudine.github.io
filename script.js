$(document).ready(function(){
    $(window).scroll(function(){
        // sticky Navbarr on scroll script
        if(this.scrollY > 20){
            $('.Navbarr').addClass("sticky");
        }else{
            $('.Navbarr').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.Navbarr .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/Navbarr script
    $('.menu-btn').click(function(){
        $('.Navbarr .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Bienvenue dans mon portfolio", "Welcome to my portfolio", "Bienvenido a mi portafolio" ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Qui suis-je ?", "Qu'est ce que le BTS SIO", "Quels sont mes projets apès le BTS SIO ?"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// Material Select Initialization
/*$(document).ready(function() {
    $('.mdb-select').materialSelect();
    });



/* Typewriter Competences*/
const textAnim = document.querySelector('.typewritter');

new Typewriter(textAnim, {
    loop: true,
    deleteSpeed: 20
})
.changeDelay(20)
.typeString('Je suis')
.pauseFor(350)
.typeString('<strong>, Dev Junior (Bientôt)</strong> !')
.pause(4000)
.deleteChars(18)
.typeString('<span style="color: #F16529"> HTML</span> !')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span style="color: #3C99DC"> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #F0DB4F"> JavaScript</span> !')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color: #787CB5"> PhP</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #306998"> Py</span><span style="color: #FFD43B">thon</span> !')
.pauseFor(1000)
.deleteChars(8)
.typeString('<span style="color: #5382a1"> J</span><span style="color: #ED8B00">a</span><span style="color: #5382a1">v</span><span style="color: #ED8B00">a</span> !')
.pauseFor(1000)
.deleteChars(26)
.typeString('<span style="color: crimson">Consultez mon CV pour plus de détails</span>')
.pauseFor(4000)
.start()




/* Application Firebase */

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCyEIqbbr_xJZAiaGd8m9sOJCOq4JGmupU",
    authDomain: "contactform-9268d.firebaseapp.com",
    databaseURL: "https://contactform-9268d.firebaseio.com",
    projectId: "contactform-9268d",
    storageBucket: "contactform-9268d.appspot.com",
    messagingSenderId: "298294243735",
    appId: "1:298294243735:web:72bf7a22cd441d228254d2",
    measurementId: "G-R7Z7FPRGGD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

  // Reference messages collection
 var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
 
  
    
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var sujet = getInputVal('sujet');
    var message = getInputVal('message');
    
  
    // Save message
    saveMessage(name, company, email, sujet, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, sujet, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      sujet:sujet,
      message:message
    });
  }
  