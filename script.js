let cnt=0;

let mDiv = document.getElementById("app");
let btn = document.getElementById("swap");

function swapTheme(){
    cnt++;
    if(cnt%2==0){
        mDiv.setAttribute("class","day");
        btn.setAttribute("class","button_day");
        document.body.style.backgroundColor = "white";
    }
    else{
        mDiv.setAttribute("class","night");
        btn.setAttribute("class","button_night");
        document.body.style.backgroundColor = "black";
    }
}