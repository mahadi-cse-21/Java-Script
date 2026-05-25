let countlabel;

let plus = document.getElementById('plus');
let zero = document.getElementById('zero');
let minus= document.getElementById('minus');

function action(btn)
{
    let val =0;
    if(btn == plus)  val = 1;
    if(btn == minus)  val = -1;
    countlabel =Number(document.getElementById('countlabel').innerText);
    if(btn == zero)
    {
         document.getElementById('countlabel').innerHTML = "0";
    }
    else 
    {
         countlabel +=val;
    document.getElementById('countlabel').innerHTML = countlabel;
    }
   
}
plus.onclick = ()=> action(plus);
zero.onclick =()=> action(zero);
minus.onclick =()=> action(minus);