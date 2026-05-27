const display = document.getElementById("display");
display.value = "0";


function appendtToDisplay(input){

    if(input>"0" && display.value==="0")
        display.value=input;
    else
     display.value+=input;


}

function clearDisplay(){
    display.value="0";

}

function calulate()
{
    try {
        display.value = eval(display.value);
        
    } catch (error) {
        display.value = "error";
    }

    
}