const togggleButton = document.getElementById("toggle-button")
const theme = localStorage.getItem("theme")
const icon = document.getElementById("myIcon");
const size= document.getElementById("size")
const sizeColor=size.getElementsByTagName("span")
function myFunction(smallImg) {
    var fullImg = document.getElementById("full")
    fullImg.src = smallImg.src;
}

function changeColor() {
    // Check current icon class and switch
    if (icon.classList.contains("fa-toggle-off")) {
        localStorage.setItem("theme", "dark")
        window.location.reload()
    }
    else {
        localStorage.setItem("theme", "light")
        window.location.reload()
    }
}


const loadApp = () => {

    if (theme == "dark") {
        icon.classList.remove("fa-toggle-off");
        icon.classList.add("fa-toggle-on");
        document.body.style.backgroundColor = " #352f2f"
        icon.style.color = "white"
        document.body.style.color="white"
        for(i=0;i<sizeColor.length;i++){
            sizeColor[i].style.color="white"
        }
    }

    if (theme == "light") {
        icon.classList.remove("fa-toggle-on");
        icon.classList.add("fa-toggle-off");
        document.body.style.backgroundColor = "white"
        icon.style.color = "black"
    }
}

loadApp()


togggleButton.addEventListener("click", changeColor)