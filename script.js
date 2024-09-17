let hourEle = document.getElementById("hour");
let minEle = document.getElementById("minute");
let secEle = document.getElementById("seconds");
let amPm = document.getElementById("ampm");

function updateTime(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap='AM';
    if(h > 12){
        h = h - 12;
        ap = 'PM';
    }
    hourEle.innerText= h ;
    minEle.innerText=m;
    secEle.innerText=s;
    amPm.innerText=ap;
    setInterval(()=>{
        updateTime();
    }, 1000);
}

updateTime();