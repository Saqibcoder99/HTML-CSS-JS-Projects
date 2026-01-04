passwordBox=document.getElementById("Password");


function generatePassword(){
let str="SAQIBAQIB1234@$&^082082dbfemfjf";
pass="";
for(i=0;i<12;i++){
    pass=pass +str[Math.floor(Math.random()*str.length)]
}
passwordBox.value=pass;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    
}