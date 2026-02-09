function myFunction(smallImg) {
    var fullImg = document.getElementById("full")
    fullImg.src = smallImg.src;
}

function changeColor() {
    const icon = document.getElementById("myIcon");
    // Check current icon class and switch
    if (icon.classList.contains("fa-toggle-off")) {
        icon.classList.remove("fa-toggle-off");
        icon.classList.add("fa-toggle-on");
        document.body.style.backgroundColor = " #352f2f"
           icon.style.color="white"
        
    } else {
        icon.classList.remove("fa-toggle-on");
        icon.classList.add("fa-toggle-off");
        document.body.style.backgroundColor = "white"
        icon.style.color="black"
    }
}
