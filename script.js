// making the navigation system come alive
// const links = document.querySelectorAll('.link');
// const sections = document.querySelectorAll('section');

// let activeLink = 0;

// links.forEach((link, i) => {
//     link.addEventListener('click', () => {
//         if(activeLink != i){
//             link.classList.add('active');

//             setTimeout(() => {
//                 activeLink = i;
//                 sections[i].classList.add('active');
//             }, 1000);
//         }
//     })
// })

let links = document.getElementsByClass("links");

links.addEventListener("mouseenter", function(event) {
    event.target.style.color = "purple";
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);

links.addEventListener("mouseover", function(event) {
    event.target.style.colot = "orange";
    this.setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);

const handleFirstTab = (e) => {
    if(e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing')

        window.removeEventListener('keydown', handleFirstTab)
        window.addEventListener('mousedown', handleMouseDownOnce)
    }
}





// button event handler

let btn = document.querySelector('button');
btn.addEventListener('click', function(event) {
    alert(event.type);
});

btn.addEventListener('click', function(event) {
    alert('clicked!');
})

// adding an eventListener() to the submit form

const f = document.createElement("form");
document.body.appendChild(f);
f.action = "/cgi-bin/some.cgi";
f.method = "POST";
f.submit();