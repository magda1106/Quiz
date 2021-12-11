
const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById('question-container')

questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setNextQuestion()
})



function startGame(){
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions=question.sort(()=>Math.random() - .5)
currentQuestionIndex=0
questionContainerElement.classList.remove('hide')

setNextQuestion()
}

function setNextQuestion(){
    clearStatusClass(document.body)
    resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question){
questionElement.innerText = question.question
question.answers.forEach(answer=>{
    const button=document.createElement('button')
    button.innerText=answer.text
    button.classList.add('btn')

    if(answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
})
}
function resetState(){
nextButton.classList.add('hide')
while(answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
}
}

function selectAnswer(e){
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button =>{
 setStatusClass(button, button.dataset.correct)
})
if(shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
}else{
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}
nextButton.classList.remove('hide')
}
function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }

}

function clearStatusClass(element){
element.classList.remove('correct')
element.classList.remove('wrong')
}

const question=[
    {
        question: 'What is 6+2 ? ',
        answers:[
            {text: '8', correct: true },
            {text:'22', correct:false},
            {text:'23', correct:false},
            {text:'242', correct:false}
        ]
    },
    {
            question: 'What is 10+2 ? ',
            answers:[
                {text: '5', correct: false },
                {text:'12', correct:true},
                {text:'23', correct:false},
                {text:'234', correct:false}
            ]
    },
    {
        question: 'What is 10+2 ? ',
        answers:[
            {text: '5', correct: false },
            {text:'12', correct:true},
            {text:'23', correct:false},
            {text:'234', correct:false}
        ]
    },
    {
        question: 'What is 14 -2 ? ',
        answers:[
            {text: '12', correct: true },
            {text:'34', correct:false},
            {text:'43', correct:false},
            {text:'67', correct:false}
        ]
    }
]