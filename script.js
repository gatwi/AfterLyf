// Bringing the navbar to life!

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){

         // introducing functionality to the scroll-up-btn
            
            $('.scroll-up-btn').addClass("scroll-up-btn");
        }else{
            $('.scroll-up-btn').removeClass("scroll-up-btn");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    })
});


const handleFirstTab = (e) => {
    if(e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing')
  
      window.removeEventListener('keydown', handleFirstTab)
      window.addEventListener('mousedown', handleMouseDownOnce)
    }
  
  }




// adding an eventListener() to the submit form

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
})

