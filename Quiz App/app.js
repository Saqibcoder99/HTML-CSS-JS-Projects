let nextBtn = document.getElementById("next");
let ques = document.getElementById("question")
let optionOne = document.getElementById("btn-1")
let optionTwo = document.getElementById("btn-2")
let optionThree = document.getElementById("btn-3")
let optionFour = document.getElementById("btn-4")
let button = document.getElementById("button")
let btns = button.getElementsByTagName("button")
let questions = [
    {
        question: "1. Which is the largest animal in the world?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "2. Which is the smallest country in the world?",
        answer: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Shri Lanka", correct: false },
        ]
    },
    {
        question: "3. Which is the largest desert in the world?",
        answer: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },
        ]
    },
    {
        question: "4. Which is the smallest continent the world?",
        answer: [
            { text: "Asia", correct: false },
            { text: "Austrailia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    }
    , {
        question: "5. What is the capital of Pakistan?",
        answer: [
            { text: "Karachi", correct: false },
            { text: "Lahore", correct: false },
            { text: "Islamabad", correct: true },
            { text: "Peshawar", correct: false }
        ]
    },
    {
        question: "6. Who is the founder of Pakistan?",
        answer: [
            { text: "Allama Iqbal", correct: false },
            { text: "Liaquat Ali Khan", correct: false },
            { text: "Muhammad Ali Jinnah", correct: true },
            { text: "Ayub Khan", correct: false }
        ]
    },
    {
        question: "7. Which is the national language of Pakistan?",
        answer: [
            { text: "Punjabi", correct: false },
            { text: "Sindhi", correct: false },
            { text: "Urdu", correct: true },
            { text: "Pashto", correct: false }
        ]
    },
    {
        question: "8. Which is the highest mountain peak in Pakistan?",
        answer: [
            { text: "Nanga Parbat", correct: false },
            { text: "Broad Peak", correct: false },
            { text: "K2", correct: true },
            { text: "Gasherbrum I", correct: false }
        ]
    },
    {
        question: "9. What is the national flower of Pakistan?",
        answer: [
            { text: "Rose", correct: false },
            { text: "Sunflower", correct: false },
            { text: "Jasmine", correct: true },
            { text: "Tulip", correct: false }
        ]
    },
    {
        question: "10. Which river is the longest in Pakistan?",
        answer: [
            { text: "Chenab", correct: false },
            { text: "Jhelum", correct: false },
            { text: "Indus River", correct: true },
            { text: "Ravi", correct: false }
        ]
    }
];
let index = 0;
let showQuestion = () => {
    ques.innerHTML = questions[index].question
    optionOne.innerHTML = questions[index].answer[0].text
    optionTwo.innerHTML = questions[index].answer[1].text
    optionThree.innerHTML = questions[index].answer[2].text
    optionFour.innerHTML = questions[index].answer[3].text
}
showQuestion()
let nextQuestion = () => {
   if(questions[index]<questions.length){
    resetColors()
    index++
    Array.from(btns).forEach(btns => btns.disabled = false);
    nextBtn.style.display = "none";
    showQuestion()
    return
   }else{
     ques.innerHTML = "nothing"
   }
}
let checkQuestion = (e) => {
    let clickBtn = e.target;
    let optionIndex = Array.from(btns).indexOf(clickBtn);
    if (clickBtn.tagName !== "BUTTON")
        return;
    Array.from(btns).forEach(btns => btns.disabled = true);
    if (questions[index].answer[optionIndex].correct === true) {
        clickBtn.style.backgroundColor = " #9aeabc"
    } else {
        clickBtn.style.backgroundColor = " #ff9393"
    }
    questions[index].answer.forEach((answer, i) => {
        if (answer.correct === true) {
            btns[i].style.backgroundColor = "#9aeabc";
        }
    });
    nextBtn.style.display = "block"
}
let resetColors = () => {
    let optionIndex = Array.from(btns)
    for (i = 0; i < optionIndex.length; i++) {
        optionIndex[i].style.backgroundColor = "";
    }
}

button.addEventListener("click", checkQuestion)
nextBtn.addEventListener("click", nextQuestion)

