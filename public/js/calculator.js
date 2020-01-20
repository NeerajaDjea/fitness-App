var calculate = document.querySelector('#calculate');
var results = document.querySelector(".results");
var calculator = document.querySelector(".container");
var result1 = document.querySelector('#result1');
var result2 = document.querySelector("#result2");
var result3 = document.querySelector("#result3");
var result4 = document.querySelector("#result4");
var eResult1 = document.querySelector('#Eresult1');
var eResult2 = document.querySelector('#Eresult2');
var eResult3 = document.querySelector('#Eresult3');

var back = document.querySelector('#back')

calculate.addEventListener('click', function() {
    event.preventDefault()
    var gender = document.querySelector("#gender1").value;
    console.log(gender.value);
    var activity = document.querySelector('#Activity').value
    var age = parseInt(document.querySelector('#age').value);
    var height = parseInt(document.querySelector('#height').value) / 2.5;
    var weight = parseInt(document.querySelector('#weight').value) * 2.20;

    var bmr1 = Math.floor(66 + (8.3 * weight) + (12.9 * height) - (6.8 * age) / activity);
    var bmr2 = Math.floor((66 + (8.3 * weight) + (12.9 * height) - (6.8 * age)) * .85 / activity);
    var bmr3 = Math.floor((66 + (8.3 * weight) + (12.9 * height) - (6.8 * age)) * .7 / activity);
    var bmr4 = Math.floor((66 + (8.3 * weight) + (12.9 * height) - (6.8 * age)) * .5 / activity);
    var weight1 = (bmr1 / 10100).toFixed(1);
    var weight2 = (bmr1 / 5400).toFixed(1);
    var weight3 = (bmr1 / 2600).toFixed(1)

    calculator.style.display = "none";
    results.style.display = "block";
    result1.innerHTML = bmr1
    result2.innerHTML = bmr2
    result3.innerHTML = bmr3
    result4.innerHTML = bmr4
    eResult1.innerHTML = weight1;
    eResult2.innerHTML = weight2;
    eResult3.innerHTML = weight3;

    //     Adult male:  = BMR
    // Adult female: 655 + (4.3 x weight in lbs.) + (4.7 x height in inches) - (4.7 x age in years) = BMR
})
back.addEventListener('click', function() {
    calculator.style.display = "block";
    results.style.display = "none"
})