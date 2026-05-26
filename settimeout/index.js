
// function say(){
//     window.alert("hello");
// }

// setTimeout(say,3000);


// const timeId = setTimeout(()=> window.alert("hello"),2000);
// clearTimeout(timeId);
let timeid;
function start()
{
  timeid =   setTimeout(() => {
        console.log("button clicked!");
        
    }, 1);
}

function cleartimeout()
{
    clearTimeout(timeid);
    console.log("clear");
}