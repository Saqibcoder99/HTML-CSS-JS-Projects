
let userName = document.getElementById("name")
let userProfile = document.getElementById("profile")
let userPassion = document.getElementById("passion")
let userDescription = document.getElementById("description")
let btnRight = document.getElementById("btn-right")
let btnLeft = document.getElementById("btn-left")
//console.log(userDescription.innerHTML)
let developerData = [
    {
        img: "https://th.bing.com/th/id/OIP.hPgJmjPIw8yGc02UEzhM6AHaHa?w=198&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        name: "Saqib Javaid",
        passion: "WEB DEVELOPER",
        description: "I'm - a passionate learner on the journey to becoming a professional Web Developer.Currently focusing on building modern, responsive websites with clean design and smooth user experience."
    },
    {
        img: "https://tse1.explicit.bing.net/th/id/OIP.lXppgN0YczVa1BBAnVTKTwAAAA?cb=defcachec2&pid=ImgDet&w=184&h=281&c=7&dpr=1.3&o=7&rm=3",
        name: "Aqib Javaid",
        passion: "GRAPHIC DESIGNER",
        description: "Creative graphic designer skilled in logos, social media posts and branding. Focused on clean design and visual quality"
    },
    {
        img: "https://tse4.mm.bing.net/th/id/OIP.ji_rQVQUGP4V9vF4FoBXjQHaHa?cb=defcachec2&w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3",
        name: "Hasan Ashraf",
        passion: "WEB DEVELOPER",
        description: "I'm - a passionate learner on the journey to becoming a professional Web Developer.Currently focusing on building modern, responsive websites with clean design and smooth user experience.",
    },
    {
        img: "https://media.licdn.com/dms/image/C4D03AQFEChURv32J_A/profile-displayphoto-shrink_800_800/0/1544102958669?e=2147483647&v=beta&t=_gS54DFKu6EDDAK2DlzCH9Zo6kIm5RCFvnwwffDg39E",
        name: "Asad",
        passion: "GRAPHIC DESIGNER",
        description: "Creative graphic designer skilled in logos, social media posts and branding. Focused on clean design and visual quality"
    }
]
/*console.log(developerData[0].name)
index = 0;
function fowardSlider() {
    for (i = index; i < developerData.length; i++) {
        userProfile.src = developerData[i].img
        userName.innerHTML = developerData[i].name
        userPassion.innerHTML = developerData[i].passion
        userDescription.innerHTML = developerData[i].description
        index = i + 1;
        break
    }
}

function backSlider() {
    console.log(index)
    for (j = developerData.length; j > index; i--) {

        userProfile.src = developerData[j].img
        userName.innerHTML = developerData[j].name
        userPassion.innerHTML = developerData[j].passion
        userDescription.innerHTML = developerData[j].description

    }
}*/


let index = 0;
function showData() {
    userProfile.src = developerData[index].img
    userName.innerHTML = developerData[index].name
    userPassion.innerHTML = developerData[index].passion
    userDescription.innerHTML = developerData[index].description
}
showData()
function fowardSlider() {
    if (index == developerData.length-1) {
        index = 0
    }else{
       ++  index
    }
    showData();
}
function backSlider() {
   console.log(index)
     if (index == 0) {
        index = developerData.length-1
    }else{
       -- index
    }
    showData();
}


btnRight.addEventListener("click", fowardSlider);
btnLeft.addEventListener("click", backSlider);






