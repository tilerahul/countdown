

function formSubmit(){
    const pop = document.getElementById("main1");
    pop.classList.add("hide");
    const userDateInput = document.getElementById('dataInput').value;
    const endDate = new Date(userDateInput);

    const captionInput = document.getElementById("captionInput").value;
    const title = document.getElementById("date-title");
    title.innerHTML = captionInput || "COMMING SOON !!!";

    let innerDiv = document.getElementsByClassName("inner-div");
    let input = document.querySelectorAll("input");

    const dateId = document.getElementById("date");
    dateId.innerHTML = endDate.toDateString();
    

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
}

