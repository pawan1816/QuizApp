const questions=[
{
    question: "who is the prime minister of india ?",
    answers:[
    { text: "Rahul gandhi", correct:false},
    { text: "Narander Mode", correct:true},
    { text: "Arvind kejriwal", correct:false},
    { text: "sonia gandhi", correct:false},
    ]
},{
    question: "who is knowns as pappu ?",
    answers:[
    { text: "Rahul gandhi", correct:true},
    { text: "Narander Mode", correct:false},
    { text: "Arvind kejriwal", correct:false},
    { text: "sonia gandhi", correct:false},
    ]
},
{
    question: "who is Graduated from iit ?",
    answers:[
    { text: "Rahul gandhi", correct:false},
    { text: "Narander Mode", correct:false},
    { text: "Arvind kejriwal", correct:true},
    { text: "sonia gandhi", correct:false},
    ]
},
{
    question: "who is the most famous minister as of now in the world",
    answers:[
    { text: "Brak obama", correct:false},
    { text: "Narander Mode", correct:true},
    { text: "puttin", correct:false},
    { text: "cin zin ping", correct:false},
    ]
}
];
const questionElement=document.getElementById("question");
const answerbuttons=document.getElementById("answer-bottons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let Score=0;
function startQuiz(){
    currentQuestionIndex=0;
    Score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button= document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selecrAnswer)
    })
}
function resetState(){
    nextButton.style.display="none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }

}
function selecrAnswer(){
    const selectBtn=e.target;
    const isCorrect=selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
    }else{
        selectBtn.classList.add("incorrect");
    }
}
startQuiz();