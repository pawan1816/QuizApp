const questions = [
    {
        question: "who is the president of USA ?",
        answers:[
        { text: "Joe Biden", correct:true},
        { text: "Giorgia Meloni", correct:false},
        { text: "Vladimir Putin", correct:false},
        { text: "Narander Modi", correct:false},
        ]
    },
    {
        question: "who is the prime minister of italy ?",
        answers:[
        { text: "Vladimir Putin", correct:false},
        { text: "Narander Modi", correct:false},
        { text: "Giorgia Meloni", correct:true},
        { text: "Rishi Sunak", correct:false},
        ]
    },
    {
        question: "who is the prime minister United Kingdom ?",
        answers:[
        { text: "Joe Biden", correct:false},
        { text: "Giorgia Meloni", correct:false},
        { text: "Rishi Sunak", correct:true},
        { text: "Vladimir Putin", correct:false},
        ]
    },
    {
        question: "who is the president of Russia ?",
        answers:[
        { text: "Vladimir Putin", correct:true},
        { text: "Rishi Sunak", correct:false},
        { text: "Xi Jinping", correct:false},
        { text: "Giorgia Meloni", correct:false},
        ]
    },
    {
        question: "who is the president of Chaina ?",
        answers:[
        { text: "Vladimir Putin", correct:false},
        { text: "Rishi Sunak", correct:false},
        { text: "Xi Jinping", correct:true},
        { text: "Giorgia Meloni", correct:false},
        ]
    },
    {
        question: "who is the president of Canada ?",
        answers:[
        { text: "Vladimir Putin", correct:false},
        { text: "Rishi Sunak", correct:false},
        { text: "Xi Jinping", correct:false},
        { text: "Justin Trudeau", correct:true},
        ]
    },
    {
        question: "who is the prime minister of india ?",
        answers:[
        { text: "Rahul gandhi", correct:false},
        { text: "Narander Modi", correct:true},
        { text: "Arvind kejriwal", correct:false},
        { text: "sonia gandhi", correct:false},
        ]
    },
    {
        question: "who is knowns as pappu ?",
        answers:[
        { text: "Rahul gandhi", correct:true},
        { text: "Narander Mode", correct:false},
        { text: "Arvind kejriwal", correct:false},
        { text: "sonia gandhi", correct:false},
        ]
    },
    {
        question: "which Minister of india is Graduated from iit ?",
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
        { text: "Narander Modi", correct:true},
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

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }

}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        Score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display ="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You Scored ${Score} out of ${questions.length}!`;
    nextButton.innerHTML="play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
   if(currentQuestionIndex < questions.length){
    handleNextButton();
   }else{
    startQuiz();
   }
});
startQuiz();