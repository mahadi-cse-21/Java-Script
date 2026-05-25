function CtoF(value)
{
    return ((value*9)/5)+32;
}
function FtoC(value)
{
    return ((value-32)*5)/9;
}


function FtoK(value)
{
    return (((value-32)*5)/9)+273;
}

function KtoF(value)
{
    return (((value-273)*9)/5)+32;
}

function CtoK(value)
{
    return value+273
}
function KtoC(value)
{
    return value-273;
}

function convert()
{
    let ftoc = document.getElementById("FarenheighttoCelcius").checked;
    let ftok = document.getElementById("FareheighttoKelvin").checked;
    let ctof = document.getElementById("CelciustoFarenhight").checked;
    let ctok = document.getElementById("CenciustoKelvin").checked;
    let ktof = document.getElementById("KelvintoFarenheight").checked;
    let ktoc = document.getElementById("KelvintoCelcius").checked;

    let input = Number(document.getElementById('tempvlaue').value);

    let output = document.getElementById('result');

    if (ftoc)
    {
        output.textContent =
            `Temperature in Celsius is: ${FtoC(input).toFixed(2)} °C`;
    }

    else if (ftok)
    {
        output.textContent =
            `Temperature in Kelvin is: ${FtoK(input).toFixed(2)} K`;
    }

    else if (ctof)
    {
        output.textContent =
            `Temperature in Fahrenheit is: ${CtoF(input).toFixed(2)} °F`;
    }

    else if (ctok)
    {
        output.textContent =
            `Temperature in Kelvin is: ${CtoK(input).toFixed(2)} K`;
    }

    else if (ktof)
    {
        output.textContent =
            `Temperature in Fahrenheit is: ${KtoF(input).toFixed(2)} °F`;
    }

    else if (ktoc)
    {
        output.textContent =
            `Temperature in Celsius is: ${KtoC(input).toFixed(2)} °C`;
    }

    else
    {
        output.textContent = "Please select a conversion option.";
    }
}
