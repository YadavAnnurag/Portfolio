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