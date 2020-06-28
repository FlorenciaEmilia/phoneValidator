
function getInputValue(){
    let inputVal=document.getElementById('phoneNumber').value;
    let regExp=/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/ig;
    let resultDisplay=document.getElementById("results")
    resultDisplay.className=""

    if(regExp.test(inputVal)){
        return resultDisplay.className="passed"

    }
    else{
        return resultDisplay.className="failed"  
    }
    
}