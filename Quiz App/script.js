const quizData = [{
        question: "How old is Florin",
        a: "10",
        b: "20",
        c: "30",
        d: "40",
        Correct: "c"
    }, {
        question: "What is the most used programming language in 2021",
        a: "java",
        b: "c",
        c: "Python",
        d: "JavaScript",
        Correct: "d",
    }, {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};


submitBtn.addEventListener('click', () => {
    currentQuiz++;
    if (currentQuiz < quizData.length) {


        loadQuiz();
    } else {
        alert("You finished get yourself an Orange lemonade");
    }
});