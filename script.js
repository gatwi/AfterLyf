// communicating with the API

const getDiseases = (symptoms) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1c2845669dmsh2435e5986dffce7p1981adjsn4e9ca7dac91e',
            'X-RapidAPI-Host': 'disease-detection.p.rapidapi.com'
        }
    };
    
    fetch(`https://disease-detection.p.rapidapi.com/get_disease/${symptoms}`, options)
        .then(response => response.json())
        .then(response => getResults(response))
        .catch(err => console.error(err));
}

const getResults = (results) => {

const resultSection =  document.querySelector('#results')

    console.log(results)
    const ul = document.createElement('ul')
    results.forEach(res=>{
        const result = `
         <div id="resultItem">
                <h1>${res.Disease}</h1>
                <p>Symptom 1: ${res.Symptom_1}</p>
                <p>Symptom 2: ${res.Symptom_2}</p>
                <p>Symptom 3: ${res.Symptom_3}</p>
            </div>
        `
        const li = document.createElement('li')
        li.innerHTML = result
        ul.appendChild(li)

    })
    resultSection.appendChild(ul)


    const outputValue = document.querySelector("#answer")
    outputValue.addEventListener("click", function(e) {
        e.preventDefault()
        console.log("hay fever")
    const inputValue = document.querySelector("#query").value
console.log(inputValue)
        getDiseases(inputValue)
    })
}

const init = () => {
    document.addEventListener("DOMContentLoaded", function() {
        getDiseases()
        // getResults()
    })
}

init()


// // Bringing the navbar to life!

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


const donor = document.getElementById("donorBtn")
console.log(donor)

donor.addEventListener("click", function(e) {
    e.preventDefault()
})



// // adding an eventListener() to the submit form

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
})


