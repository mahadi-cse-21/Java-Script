const display = document.getElementById("display");
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isrunning = false;


function start()
{
    if(!isrunning)
    {
        document.getElementById("startbtn").disable = true ;
        starttime = Date.now()-elapsedtime;
        timer = setInterval(update,10);
        isrunning = true;
    }
}

function update()
{
    const currenttime = Date.now();
    elapsedtime = currenttime - starttime;
    let hours = Math.floor(elapsedtime/(1000*60*60));
    let minutes = Math.floor(elapsedtime/(1000*60)%60);
    let seconds = Math.floor(elapsedtime/(1000)%60);
    let miliseconds = Math.floor((elapsedtime%1000/10));
    display.textContent =`${hours} : ${minutes} : ${seconds} : ${miliseconds}`;
}
function stop()
{
    if(isrunning)
    {
        clearInterval(timer);
        elapsedtime = Date.now() - starttime;
        isrunning=false;
    }
}

function reset()
{
    clearInterval(timer);
    document.getElementById("startbtn").disable = false;
    starttime=0;
    elapsedtime=0;
    isrunning=false;
    display.textContent =`00:00:00:00`;
}