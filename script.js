document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a nav link (mobile)
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }});




document.addEventListener('DOMContentLoaded',function(){
  const logo = document.getElementById('logo');

  logo.addEventListener('click',function(){
    location.reload();
  });
});


document.addEventListener('DOMContentLoaded' ,function(){
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit' ,function(e){
    e.preventDefault();
    const formData = new FormData(this);
    fetch('https://formspree.io/f/xnnbwzrz',{
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(Response => {
      if(Response.ok){
        document.getElementById('formMessage').innerHTML= '<p ">Message sent successfully!</p>';
        contactForm.reset();
        }else{
          document.getElementById('formMessage').innerHTML='<p style="color: red;">Something went wrong. Try again.</p>';
        }
    })
    .catch(error =>{
      document.getElementById('formMessage').innerHTML='<p style= "color: red;">Network Error.Please Try Again.</P';
    });
  });
});



