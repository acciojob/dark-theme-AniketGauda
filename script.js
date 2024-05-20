//your code here

let cnt=0;

let mDiv = document.getElementById("app");
let btn = document.getElementById("swap");

function swapTheme(){
    cnt++;
    if(cnt%2==0){
        mDiv.setAttribute("class","day-ev");
        btn.setAttribute("class","button_day_ev");
        document.body.style.backgroundColor = "white";
    }
    else{
        mDiv.setAttribute("class","day-od");
        btn.setAttribute("class","button_day_od");
        document.body.style.backgroundColor = "black";
    }
}