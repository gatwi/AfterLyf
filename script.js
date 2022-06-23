$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("scroll-up-btn");
        }else{
            $('.scroll-up-btn').removeClass("scroll-up-btn");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    })
});

// adding an eventListener() to the submit form

// const f = document.createElement("form");
// document.body.appendChild(f);
// f.action = "/cgi-bin/some.cgi";
// f.method = "POST";
// f.submit();