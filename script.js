const quizData = [
    {
        question: "Where is the Eiffel Tower?", 
        options: ['Italy', 'Russia', 'Paris', 'Canada'], 
        answer: "Paris",
    },
    {
        question: "What is the capital of the U.S.A?",
        options: ["L.A", "Harrisburg", "Washington D.C.", "Texas"],
        answer: "Washington D.C."
    },
    {
        question: "which of these is an animal?",
        options: ['Marker', 'Computer', 'Lion', 'Desk'],
        answer: "Lion", 
    },
    {
        question: "What color is the sky?",
        options: ['Blue', 'Red', 'Pink', 'Apple'],
        answer: "Blue", 
    },
    {
        question: "In what country is Mandarin the official language?",
        options: ['Japan', 'Russia', 'America', 'China'],
        answer: "China", 
    },
    {
        question: "Who was the first president of the U.S?",
        options: ['George Washington', 'George Bush', 'Abraham Lincoln', 'John Adams'],
        answer: "Blue", 
    },
    {
        question: "What brand has a bitten fruit logo?",
        options: ['HP', 'Apple', 'Galaxy', 'Google pixel'],
        answer: "Apple", 
    },
    {
        question: "What is the name of the morning CSET teacher",
        options: ['Mister', 'Mr. Stevens', 'Mr. Christopher', 'Mr. Chowdhury'],
        answer: "Mr. Chowdhury", 
    },
    {
        question: "What animal is considered a humans best friend?",
        options: ['Dog', 'Gorilla', 'Hippo', 'Mermaid'],
        answer: "Dog", 
    },
    {
        question: "What is the name of your College?",
        options: ['Texas University', 'Penn State College', 'Thaddeus Stevens College of Technology', 'Harvard University'],
        answer: "Thaddeus Stevens College of Technology", 
    },
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