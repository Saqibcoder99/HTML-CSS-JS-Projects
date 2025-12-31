let data = localStorage.getItem("student");
if (data) {
    let student = JSON.parse(data);
    document.getElementById("back-side-name").innerText = student.name;
    document.getElementById("back-side-fname").innerText = student.fatherName;
    document.getElementById("back-side-CNIC").innerText = student.idCard;
    document.getElementById("img").src = student.Image;
    document.getElementById("back-side-course").innerText = student.course;
    let fullName=student.name+" "+student.fatherName;
    document.getElementById("front-side-name").innerText = fullName;
      document.getElementById("front-side-course").innerText = student.course;
    console.log( document.getElementById("img").src = student.Image)
}