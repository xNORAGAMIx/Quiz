const quizData = [
    {
        question : "Which app do you use the most?",
        a: "WhatsApp",
        b: "Facebook",
        c: "Instagram",
        d: "Youtube",
        correct: "a"
    },
    {
        question : "Which season do you like?",
        a: "Summer",
        b: "Winter",
        c: "Autumn",
        d: "Spring",
        correct: "d"
    },
    {
        question : "Which one do you prefer on a rainy day?",
        a: "Sleeping",
        b: "Listening to Music",
        c: "Eating",
        d: "All of above",
        correct: "d"
    },
];

const quiz = document.getElementById('quiz')
const ans = document.querySelectorAll('.answer')
const quesEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit = document.getElementById('submit')

let currQ = 0;
let score = 0;

startQuiz()

function startQuiz() {
    unselect()
    
    const currQuizData = quizData[currQ];
    question.innerHTML = currQuizData.question;
    a_text.innerHTML = currQuizData.a
    b_text.innerHTML = currQuizData.b
    c_text.innerHTML = currQuizData.c
    d_text.innerHTML = currQuizData.d
}

function unselect(){
    ans.forEach(ansEl => ansEl.checked = false)
}

function select(){
    let answer
    ans.forEach(ansEl => {
        if(ansEl.checked){
            answer = ansEl.id
        }
    })
    return answer
}

submit.addEventListener('click', () => {
    const answer = select()

    if(answer){
        if(answer === quizData[currQ].correct){
            score++;
        }
        currQ++;
        if(currQ < quizData.length){
            startQuiz()
        } else {
            quiz.innerHTML = `<h2> Score: ${score}/${quizData.length}
            <button onclick="location.reload()">Reload</button>`
        }
    }
})
