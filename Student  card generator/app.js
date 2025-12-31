function getData(e){
e.preventDefault();
let file= document.getElementById("upload").files[0];
let reader=new FileReader();
reader.onload=function(){
let studentInformation={
    name:document.getElementById("name").value,
    fatherName:document.getElementById("F-name").value,
    idCard:document.getElementById("id").value,
    course:document.getElementById("courses").value,
    Image: reader.result
};
//console.log(studentInformation)
localStorage.setItem("student",JSON.stringify(studentInformation));
    setTimeout(function () {
        window.location.href = "card.html"
    }, 300)
}
reader.readAsDataURL(file);
}



