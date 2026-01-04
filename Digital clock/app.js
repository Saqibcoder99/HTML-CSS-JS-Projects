function currentTime(){
let date=new Date();
let hour=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();
document.getElementById("hour").innerHTML=hour
document.getElementById("min").innerHTML=min
document.getElementById("sec").innerHTML=sec

if(hour<=12){
    document.getElementById("time").innerHTML="AM"
}
else{
        document.getElementById("time").innerHTML="PM"
}
}
setInterval(currentTime,1000);
currentTime()