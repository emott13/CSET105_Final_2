const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    }
];

let currentIndex = 0;
let score = 0;

function startQuiz() {
    let currentQuestion = quizData[currentIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    let optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        optionsContainer.innerHTML += `
            <div>
                <input type="radio" name="option" id="option${index}" value="${option}">
                <label for="option${index}">${option}</label>
            </div>
        `;
    });
}





// const quizContainer = document.getElementById('.quiz');
// const submitElement = document.getElementById('submit');
// const resultsContainer = document.getElementById('results');

// if(document.readyState == 'loading'){
//     document.addEventListener(DOMReadyState == 'loaded', buildQuiz);
// }
// else{
//     buildQuiz();
// }

// function buildQuiz(){
//     let output = [];

//     questions.forEach(
//         (currentQuestion, questionNumber) => {
            
//             const answers = [];

//             for(letter in currentQuestion.answers){

//                 answers.push(
//                     `<label>
//                     <input type="radio" name="question${questionNumber} value="${letter}">
//                     ${letter} : 
//                     ${currentQuestion.answers[title]}
//                     </label>`
//                 );
//             }

//             output.push(
//                 `<div class ="question"> ${currentQuestion.question} </div>
//                 <div class="answers"> ${answers.join('')} </div>`
//             );
//         }
//     );

//     // quizContainer.innerHTML = output.join('');
// }

// function showResults(){
//     const answerContainers = quizContainer.querySelectorAll('.answers');
//     let numCorrect = 0;
//     questions.forEach( (currentQuestion, questionNumber) => {
//         const answerContainer = answerContainers[questionNumber];
//         let selector = `input[name=question${questionNumber}]:checked`;
//         let userAnswer = (answerContainer.querySelector(selector) || {}).value;

//         if(userAnswer === currentQuestion.answer){
//             numCorrect++;
//             answerContainers[questionNumber].style.color = 'lightgreen';
//         }
//         else{
//             answerContainers[questionNumber].style.color = 'red';
//         }
//     });
//     resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
// };


// // let current = 0;
// // let submitted = false;

// // function showQuestions (){
// //     submitted = false;

// //     submitElement.removeEventListener('click', handleSubmit);

// //     let question = questions[currentQuestion];

// //     quizElement.innerHTML = `
// //     <h2>${question.name}</h2>
// //     <form id="myForm">
// //         <input type="radio" id="0" name="option" value="0">
// //         <label for="0">${qestion.options[0].title}</label>
// //         <br>

// //         <input type="radio" id="1" name="option" value="1">
// //         <label for="0">${qestion.options[1].title}</label>
// //         <br>

// //         <input type="radio" id="2" name="option" value="2">
// //         <label for="0">${qestion.options[2].title}</label>
// //         <br>

// //         <input type="radio" id="3" name="option" value="3">
// //         <label for="0">${qestion.options[3].title}</label>
// //         <br>

// //         <p id="message"></p>

// //         <button id="submit">Submit</button>
// //         `;

// //     submitElement.addEventListener('click', handleSubmit);
// // }

// // function handleSubmit(event){
// //     event.preventDefault()

// //     let message = documen.getElementById('message');
// //     let answer = document.querySelector('input[name="option"]:checked');

// //     if(!answer){
// //         message.innerHTML = 'Please select an answer.'
// //         return;
// //     }

// //     let question = questions[currentQuestion];
// //     let correctAnswer = question.answer;
// //     let userAnswer = answer.value

// //     if(correctAnswer === userAnswer){

// //     }
// //     else{

// //     }

// //     document.getElementById('0').disabled = true;
// //     document.getElementById('1').disabled = true;
// //     document.getElementById('2').disabled = true;
// //     document.getElementById('3').disabled = true;

// //     submitted = true;
// // };