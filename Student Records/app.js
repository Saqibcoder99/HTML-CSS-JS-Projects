let display = document.getElementById("display")
let container = document.getElementById("container")
let studentRow = document.getElementById("card")
let studentRecord = document.getElementById("record")
let btn = document.getElementById("btn")
let kuStudents = [
    {
        name: "Saqib Javaid",
        id: "448051",
        Semesters: [
            {
                Math: 70,
                Phy: 60,
                Isl: 80,
                Eng: 65,
                CS: 85
            },
            {
                Math: 75,
                Phy: 65,
                Isl: 85,
                Eng: 60,
                CS: 80
            },
            {
                Math: 85,
                Phy: 70,
                Isl: 75,
                Eng: 70,
                CS: 90
            },
            {
                Math: 80,
                Phy: 68,
                Isl: 84,
                Eng: 66,
                CS: 83
            },
            {
                Math: 50,
                Phy: 70,
                Isl: 86,
                Eng: 79,
                CS: 82
            }
        ]
    },
    {
        name: "Abdul Rehman",
        id: "448052",
        Semesters: [
            {
                Math: 60,
                Phy: 70,
                Isl: 70,
                Eng: 75,
                CS: 75
            },
            {
                Math: 65,
                Phy: 75,
                Isl: 75,
                Eng: 70,
                CS: 80
            },
            {
                Math: 75,
                Phy: 80,
                Isl: 65,
                Eng: 80,
                CS: 85
            },
            {
                Math: 70,
                Phy: 58,
                Isl: 74,
                Eng: 46,
                CS: 63
            },
            {
                Math: 50,
                Phy: 50,
                Isl: 76,
                Eng: 69,
                CS: 72
            }
        ]
    },

    {
        name: "Kashan",
        id: "448053",
        Semesters: [
            {
                Math: 50,
                Phy: 70,
                Isl: 70,
                Eng: 75,
                CS: 75
            },
            {
                Math: 65,
                Phy: 55,
                Isl: 75,
                Eng: 50,
                CS: 70
            },
            {
                Math: 55,
                Phy: 50,
                Isl: 65,
                Eng: 80,
                CS: 80
            },
            {
                Math: 60,
                Phy: 78,
                Isl: 74,
                Eng: 86,
                CS: 73
            },
            {
                Math: 40,
                Phy: 60,
                Isl: 76,
                Eng: 89,
                CS: 72
            }
        ]
    },
    {
        name: "Ali Raza",
        id: "448052",
        Semesters: [
            { Math: 65, Phy: 58, Isl: 78, Eng: 62, CS: 80 },
            { Math: 40, Phy: 42, Isl: 45, Eng: 38, CS: 41 },
            { Math: 72, Phy: 66, Isl: 80, Eng: 68, CS: 85 },
            { Math: 75, Phy: 70, Isl: 84, Eng: 69, CS: 88 },
            { Math: 68, Phy: 65, Isl: 86, Eng: 71, CS: 83 }
        ]
    },
    {
        name: "Ahmed Khan",
        id: "448053",
        Semesters: [
            { Math: 80, Phy: 72, Isl: 85, Eng: 70, CS: 90 },
            { Math: 45, Phy: 40, Isl: 42, Eng: 39, CS: 41 },
            { Math: 82, Phy: 76, Isl: 84, Eng: 72, CS: 94 },
            { Math: 85, Phy: 78, Isl: 90, Eng: 75, CS: 96 },
            { Math: 88, Phy: 80, Isl: 92, Eng: 77, CS: 98 }
        ]
    },
    {
        name: "Usman Ali",
        id: "448054",
        Semesters: [
            { Math: 55, Phy: 60, Isl: 75, Eng: 58, CS: 70 },
            { Math: 35, Phy: 38, Isl: 40, Eng: 36, CS: 39 },
            { Math: 60, Phy: 64, Isl: 80, Eng: 62, CS: 74 },
            { Math: 42, Phy: 45, Isl: 48, Eng: 40, CS: 43 },
            { Math: 65, Phy: 68, Isl: 85, Eng: 66, CS: 78 }
        ]
    },
    {
        name: "Hamza Sheikh",
        id: "448055",
        Semesters: [
            { Math: 90, Phy: 85, Isl: 88, Eng: 80, CS: 95 },
            { Math: 88, Phy: 84, Isl: 86, Eng: 82, CS: 90 },
            { Math: 45, Phy: 40, Isl: 42, Eng: 38, CS: 41 },
            { Math: 96, Phy: 91, Isl: 94, Eng: 86, CS: 98 },
            { Math: 98, Phy: 93, Isl: 96, Eng: 88, CS: 99 }
        ]
    },
    {
        name: "Bilal Hussain",
        id: "448056",
        Semesters: [
            { Math: 70, Phy: 68, Isl: 82, Eng: 65, CS: 78 },
            { Math: 72, Phy: 70, Isl: 84, Eng: 67, CS: 80 },
            { Math: 40, Phy: 42, Isl: 44, Eng: 41, CS: 43 },
            { Math: 76, Phy: 74, Isl: 88, Eng: 71, CS: 84 },
            { Math: 78, Phy: 76, Isl: 90, Eng: 73, CS: 86 }
        ]
    },
    {
        name: "Awais Malik",
        id: "448057",
        Semesters: [
            { Math: 60, Phy: 55, Isl: 70, Eng: 58, CS: 65 },
            { Math: 38, Phy: 40, Isl: 42, Eng: 36, CS: 39 },
            { Math: 64, Phy: 59, Isl: 74, Eng: 62, CS: 69 },
            { Math: 35, Phy: 37, Isl: 39, Eng: 34, CS: 36 },
            { Math: 68, Phy: 63, Isl: 78, Eng: 66, CS: 73 }
        ]
    }
]

kuStudents.map((students, index) => {
    studentRow.innerHTML += `<div class="student-detail">
            <div class="st-name">${students.name}</div>
            <div class="st-id"> ${students.id}</div>
            <button id="btn" onclick="viewBtn(${index})">View Record</button>
        </div>`
})

function viewBtn(index) {
    display.style.display = "none"
    container.classList.remove("page")    
    container.classList.add("show")
    let std = kuStudents[index];
    let semestersHTML = "";
    let grandTotal = 0;
    let grandMax = std.Semesters.length * 500;
    let finalStatus = "Pass";

    std.Semesters.forEach((sem, i) => {
        let subjects = Object.values(sem);
        // console.log(subjects)
        let semTotal = subjects.reduce((a, b) => a + b, 0);
        //console.log(semTotal)
        let semPercent = ((semTotal / 500) * 100).toFixed(2);
        let semStatus = subjects.every(mark => mark >= 40) ? "Pass" : "Fail";
        if (semStatus === "Fail") {
            finalStatus = "Fail";
            bg = "#f79c9c"
        } else {
            bg = " #4caf50"
        }

        grandTotal += semTotal;
        semestersHTML += `
        <div class="semester">
            <div class="sem">Semester ${i + 1}</div>
            <div class="sem-marks">${semTotal} / 500</div>
            <div class="percent">${semPercent}%</div>
            <div class="p-f" style="background-color:${bg}">${semStatus}</div>
        </div>`;
    });

    let finalPercent = ((grandTotal / grandMax) * 100).toFixed(2);
    if (finalStatus === "Fail") {
        bg = "#fbd2d2"
        mainBg = "#f79797"
    } else {
        bg = "#d1f1da"
        mainBg = "#67b77e"
    }
    studentRecord.innerHTML = `
    <div class="st-information">
        <div class="st-name">${std.name}</div>
        <div class="st-info">
            <div class="id">ID: ${std.id} <span>|</span></div>
            <div class="program">BS Computer Science <span>|</span></div>
            <div class="year">3rd Year</div>
        </div>
    </div>

    <div class="student-result">
        <div class="heading">Semester Results</div>

        <div class="header">
            <div class="semes-no">Semester</div>
            <div class="marks">Marks</div>
            <div class="percent">Percentage</div>
            <div class="status">Status</div>
        </div>

        ${semestersHTML}

        <div class="footer" style="background-color:${bg}">
            <div class="totals" style="background-color:${mainBg}">
                <div class="total-marks">Total Marks:</div>
                <div class="no">${grandTotal} / ${grandMax}</div>
            </div>

            <div class="percentage">
                Percentage: <div>${finalPercent}%</div>
            </div>

            <div class="final-result">
                Final Result: <span style="color:${mainBg}">${finalStatus}</span>
            </div>
        </div>
    </div>

    <div class="back">
        <button onclick="back()">Back to List</button>
    </div>`;
}

function back() {
    display.style.display = "block"
    container.classList.remove("show")
    container.classList.add("page")

}