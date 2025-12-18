let userInput=document.getElementById("date");
userInput.max=new Date().toISOString().split("T")[0];

let result=document.getElementById("result")



function calculateAge(){
let currentDate=new Date();
currentMonth=currentDate.getMonth();
currentDay=currentDate.getDate();
currentYear=currentDate.getFullYear();




let birthDate=new Date(userInput.value);
birthMonth=birthDate.getMonth();
birthDay=birthDate.getDate();
birthYear=birthDate.getFullYear();


let resultYear,
    resultMonth,
    resultDay;

resultYear=currentYear-birthYear;
if(currentMonth>=birthMonth){
    resultMonth=currentMonth-birthMonth;
}else{
    resultYear--;
    resultMonth=12+currentMonth-birthMonth;
}
if(currentDay>=birthDay){
    resultDay=currentDay-birthDay;
}else{
    resultMonth--;
    resultDay=(new Date(birthYear,birthMonth,0).getDate())+currentDay-birthDay;
}
if(resultMonth<0){
    resultMonth=11;
    resultYear--;
}
//console.log(resultYear,resultMonth,resultDay)
result.innerHTML=` <i class="fa-solid fa-user"></i>  You are <span>${resultYear}</span> years, <span>${resultMonth}</span> months and <span>${resultDay}</span> days old`
}
