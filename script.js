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

const questions = [{
    name: "Where is the Eiffel Tower?", answer: "2", 
    options: [{title: 'Italy'}, {title: 'Russia'}, {title: 'Paris'}, {title: 'Canada'}]
},
 {name: "What is the capital of the U.S.A?", answer: "2", 
    options: [{title: 'L.A'}, {title: 'Harrisburg'}, {title: 'Washington D.C'}, {title: 'Texas'}]
},
 {name: "which of these is an animal?", answer: "3", 
    options: [{title: 'Marker'}, {title: 'Computer'}, {title: 'Lion'}, {title: 'Desk'}]
},
{name: "What color is the sky?", answer: "0", 
    options: [{title: 'Blue'}, {title: 'Red'}, {title: 'Pink'}, {title: 'Apple'}]
},
{name: "Where is chinese the official language in?", answer: "1", 
    options: [{title: 'Japan'}, {title: 'China'}, {title: 'America'}, {title: 'Russia'}]
},
{name: "Who was the first president of the U.S?", answer: "0", 
    options: [{title: 'George Washington'}, {title: 'George Bush'}, {title: 'Donald Trump'}, {title: 'Joe Biden'}]
},
{name: "What phone brand has a bitten fruit logo?", answer: "1", 
    options: [{title: 'HP'}, {title: 'Apple'}, {title: 'Galaxy'}, {title: 'Google pixel'}]
},
{name: "What is the name of your CSET teacher", answer: "3", 
    options: [{title: 'Mister'}, {title: 'Mr. Stevens'}, {title: 'Mr. Christopher'}, {title: 'Mr. Chowdhury'}]
},
{name: "What animal is considered a humans best friend?", answer: "0", 
    options: [{title: 'Dog'}, {title: 'Gorilla'}, {title: 'Hippo'}, {title: 'Mermaid'}]
},
{name: "What is the name of your College?", answer: "2", 
    options: [{title: 'Texas University'}, {title: 'Penn State College'}, {title: 'Thaddeus Stevens College of Technology'}, {title: 'Harvard University'}]
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