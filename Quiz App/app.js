let nextBtn = document.getElementById("next");
let ques = document.getElementById("question")
let optionOne = document.getElementById("btn-1")
let optionTwo = document.getElementById("btn-2")
let optionThree = document.getElementById("btn-3")
let optionFour = document.getElementById("btn-4")
let button = document.getElementById("button")
let btns = button.getElementsByTagName("button")
let heading = document.getElementById("head")
let questions = [
    {
        question: "1. What does HTML stand for?",
        answer: [
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Hyper Tool Multi Language", correct: false },
        ]
    },
    {
        question: "2. Which tag is used to create a paragraph in HTML?",
        answer: [
            { text: "div", correct: false },
            { text: "span", correct: false },
            { text: "p", correct: true },
            { text: "h1", correct: false },
        ]
    },
    {
        question: "3. Which HTML tag is used to insert an image?",
        answer: [
            { text: "picture", correct: false },
            { text: "img", correct: true },
            { text: "src", correct: false },
            { text: "image", correct: false },
        ]
    },
    {
        question: "4. Which tag is used to create a hyperlink in HTML?",
        answer: [
            { text: "href", correct: false },
            { text: "link", correct: false },
            { text: "url", correct: false },
            { text: "a", correct: true },
        ]
    },
    {
        question: "5. Which CSS property changes text color?",
        answer: [
            { text: "font-style", correct: false },
            { text: "text-align", correct: false },
            { text: "color", correct: true },
            { text: "background-color", correct: false },
        ]
    },
    {
        question: "6. Which CSS property is used for background color?",
        answer: [
            { text: "background-style", correct: false },
            { text: "background-color", correct: true },
            { text: "bgcolor", correct: false },
            { text: "color", correct: false },
        ]
    },
    {
        question: "7. Which CSS property makes text bold?",
        answer: [
            { text: "font-style", correct: false },
            { text: "font-family", correct: false },
            { text: "font-weight", correct: true },
            { text: "text-transform", correct: false },
        ]
    },
    {
        question: "8. Which CSS property aligns text?",
        answer: [
            { text: "justify-content", correct: false },
            { text: "align-text", correct: false },
            { text: "text-align", correct: true },
            { text: "font-align", correct: false },
        ]
    },
    {
        question: "9. Which symbol is used for comments in JavaScript?",
        answer: [
            { text: "//", correct: true },
            { text: "##", correct: false },
            { text: "**", correct: false },
            { text: "<!-- -->", correct: false },
        ]
    },
    {
        question: "10. Which keyword is used to declare a variable in JavaScript?",
        answer: [
            { text: "define", correct: false },
            { text: "string", correct: false },
            { text: "var", correct: true },
            { text: "int", correct: false },
        ]
    },
    {
        question: "11. Which function displays output in console?",
        answer: [
            { text: "alert()", correct: false },
            { text: "console.log()", correct: true },
            { text: "print()", correct: false },
            { text: "document.write()", correct: false },
        ]
    },
    {
        question: "12. Which JavaScript function shows an alert box?",
        answer: [
            { text: "prompt()", correct: false },
            { text: "confirm()", correct: false },
            { text: "console.log()", correct: false },
            { text: "alert()", correct: true },
        ]
    },
    {
        question: "13. Which tag is used to create a button in HTML?",
        answer: [
            { text: "btn", correct: false },
            { text: "click", correct: false },
            { text: "button", correct: true },
            { text: "input", correct: false },
        ]
    },
    {
        question: "14. Which tag is used for the largest heading in HTML?",
        answer: [
            { text: "h6", correct: false },
            { text: "heading", correct: false },
            { text: "head", correct: false },
            { text: "h1", correct: true },
        ]
    },
    {
        question: "15. Which CSS property changes font size?",
        answer: [
            { text: "font-style", correct: false },
            { text: "size", correct: false },
            { text: "text-size", correct: false },
            { text: "font-size", correct: true },
        ]
    },
    {
        question: "16. Which keyword is used for conditions in JavaScript?",
        answer: [
            { text: "while", correct: false },
            { text: "if", correct: true },
            { text: "for", correct: false },
            { text: "switch", correct: false },
        ]
    },
    {
        question: "17. Which operator is used for addition in JavaScript?",
        answer: [
            { text: "-", correct: false },
            { text: "/", correct: false },
            { text: "+", correct: true },
            { text: "*", correct: false },
        ]
    },
    {
        question: "18. Which tag creates an unordered list in HTML?",
        answer: [
            { text: "li", correct: false },
            { text: "list", correct: false },
            { text: "ol", correct: false },
            { text: "ul", correct: true },
        ]
    },
    {
        question: "19. Which CSS property adds space inside an element?",
        answer: [
            { text: "margin", correct: false },
            { text: "border", correct: false },
            { text: "padding", correct: true },
            { text: "spacing", correct: false },
        ]
    },
    {
        question: "20. Which loop repeats code multiple times in JavaScript?",
        answer: [
            { text: "switch", correct: false },
            { text: "function", correct: false },
            { text: "if statement", correct: false },
            { text: "for loop", correct: true },
        ]
    }
];
let index = 0;
let score = 0;
let showQuestion = () => {
    ques.innerHTML = questions[index].question
    optionOne.innerHTML = questions[index].answer[0].text
    optionTwo.innerHTML = questions[index].answer[1].text
    optionThree.innerHTML = questions[index].answer[2].text
    optionFour.innerHTML = questions[index].answer[3].text
}
showQuestion()
let nextQuestion = () => {
    if (nextBtn.innerHTML == "Try Again") {
        index = 0;
        score = 0;
        ques.style.color = "#001e4d"
         ques.classList.remove("result")
        heading.classList.add("main")
        heading.classList.remove("wish")
        heading.style.color = "black"
        button.style.display = "block"
        nextBtn.innerHTML = "Next"
        heading.innerHTML = "Simple Quiz"
        resetColors();
        Array.from(btns).forEach(btns => btns.disabled = false);
        showQuestion()
        return
    }
    index++
    if (index < questions.length) {
        resetColors()
        Array.from(btns).forEach(btns => btns.disabled = false);
        nextBtn.style.display = "none";
        showQuestion()
        return
    } else {
        ques.innerHTML = `You got ${score} out of ${questions.length}`
        heading.classList.remove("main")
        heading.classList.add("wish")
        if (score >= 12) {
            ques.style.color = "green"
            heading.innerHTML = "Congratulations"
            heading.style.color = "#2b6f2bfe"
        } else {
            ques.style.color = " #f80c0c9a"
            heading.innerHTML = "Try Again"
            heading.style.color = "red"
        }
        ques.className += " result"
        button.style.display = "none"
        nextBtn.innerHTML = "Try Again"
    }
}
let checkQuestion = (e) => {
    let clickBtn = e.target;
    //console.log(clickBtn)
    let optionIndex = Array.from(btns).indexOf(clickBtn);
    // console.log(optionIndex)
    if (clickBtn.tagName !== "BUTTON")
        return;
    Array.from(btns).forEach(btns => btns.disabled = true);
    if (questions[index].answer[optionIndex].correct === true) {
        clickBtn.style.backgroundColor = " #9aeabc"
        score++;
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

