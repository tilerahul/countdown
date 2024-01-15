let endDate = new Date(2024, 0, 22, 0, 0);

const dateId = document.getElementById("date");
dateId.innerHTML = endDate.toDateString();

let innerDiv = document.getElementsByClassName("inner-div");
console.log(innerDiv)
let input = document.querySelectorAll("input");




setInterval(function clock (){    
    let now = new Date();
    let diff = endDate - now;

    if(diff<0){
        innerDiv[0].innerHTML = "Expired !!!!";

        return;
    }
    input[0].value = Math.floor(diff/(1000 * 60 * 60 * 24));
    input[1].value = Math.floor((diff%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    input[2].value = Math.floor((diff%(1000 * 60 * 60))/(1000 * 60));
    input[3].value = Math.floor((diff%(1000 * 60))/(1000));
}, 1000)

