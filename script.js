

const getDiseases = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1c2845669dmsh2435e5986dffce7p1981adjsn4e9ca7dac91e',
            'X-RapidAPI-Host': 'disease-detection.p.rapidapi.com'
        }
    };
    
    fetch('https://disease-detection.p.rapidapi.com/symptom_list/', options)
        .then(response => response.json())
        .then(response => getResults(response))
        .catch(err => console.error(err));
}

const getResults = () => {
    console.log()
    const inputValue = document.querySelector("#query").value
    const outputValue = document.querySelector("#answer")
    outputValue.addEventListener("submit", function(e) {
        e.preventDefault()
        console.log("hay fever")
    })
}



const init = () => {
    document.addEventListener("DOMContentLoaded", function() {
        // getDiseases()
        getResults()
    })
}

init()































// // Bringing the navbar to life!

// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrollY > 20){
//             $('.navbar').addClass("sticky");
//         }else{
//             $('.navbar').removeClass("sticky");
//         }
//         if(this.scroll > 500){

//          // introducing functionality to the scroll-up-btn

//             $('.scroll-up-btn').addClass("scroll-up-btn");
//         }else{
//             $('.scroll-up-btn').removeClass("scroll-up-btn");
//         }
//     });

//     $('.scroll-up-btn').click(function(){
//         $('html').animate({scrollTop: 0});
//     })
// });


// const donor = document.getElementById("donorBtn")
// console.log(donor)

// donor.addEventListener("click", function(e) {
//     e.preventDefault()
// })



// // adding an eventListener() to the submit form

// const myForm = document.getElementById("myForm");
// myForm.addEventListener("submit", (e) => {
//     e.preventDefault();
// })


