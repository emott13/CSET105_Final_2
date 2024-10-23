
// const questions = [{
//     name: "Where is the Eiffel Tower?", answer: "2", 
//     options: [{title: 'Italy'}, {title: 'Russia'}, {title: 'Paris'}, {title: 'Canada'}]
// },
//  {name: "What is the capital of the U.S.A?", answer: "2", 
//     options: [{title: 'L.A'}, {title: 'Harrisburg'}, {title: 'Washington D.C'}, {title: 'Texas'}]
// },
//  {name: "which of these is an animal?", answer: "3", 
//     options: [{title: 'Marker'}, {title: 'Computer'}, {title: 'Lion'}, {title: 'Desk'}]
// },
// {name: "What color is the sky?", answer: "0", 
//     options: [{title: 'Blue'}, {title: 'Red'}, {title: 'Pink'}, {title: 'Apple'}]
// },
// {name: "Where is chinese the official language in?", answer: "1", 
//     options: [{title: 'Japan'}, {title: 'China'}, {title: 'America'}, {title: 'Russia'}]
// },
// {name: "Who was the first president of the U.S?", answer: "0", 
//     options: [{title: 'George Washington'}, {title: 'George Bush'}, {title: 'Donald Trump'}, {title: 'Joe Biden'}]
// },
// {name: "What phone brand has a bitten fruit logo?", answer: "1", 
//     options: [{title: 'HP'}, {title: 'Apple'}, {title: 'Galaxy'}, {title: 'Google pixel'}]
// },
// {name: "What is the name of your CSET teacher", answer: "3", 
//     options: [{title: 'Mister'}, {title: 'Mr. Stevens'}, {title: 'Mr. Christopher'}, {title: 'Mr. Chowdhury'}]
// },
// {name: "What animal is considered a humans best friend?", answer: "0", 
//     options: [{title: 'Dog'}, {title: 'Gorilla'}, {title: 'Hippo'}, {title: 'Mermaid'}]
// },
// {name: "What is the name of your College?", answer: "2", 
//     options: [{title: 'Texas University'}, {title: 'Penn State College'}, {title: 'Thaddeus Stevens College of Technology'}, {title: 'Harvard University'}]
// },
//     ];

var question1 = ["Where is the Eiffel Tower"];
var choice1 = [
    "<input onclick='correct1()' name='button1' type='radio' /> paris<br />" +
    "<input onclick='incorrect1()' name='button1' type='radio' /> LA<br />"+
    "<input onclick='incorrect1()' name='button1' type='radio' /> texas<br />"+
     "<input onclick='incorrect1()' name='button1' type='radio' /> russia<br />"
];

var question2 = ["What is the capital of the U.S.A?"];
var choice2 = [
    "<input onclick='correct2()' name='button2' type='radio' />Washington D.C<br />" +
    "<input onclick='incorrect2()' name='button2' type='radio' />Harrisburg<br />" +
    "<input onclick='incorrect2()' name='button2' type='radio' />Los Angeles<br />" +
    "<input onclick='incorrect2()' name='button2' type='radio' />Philadelphia<br />" 
];

var question3 = ["which of these is an animal?"];
var choice3 = [
    "<input onclick='correct3()' name='button3' type='radio' /> Cat<br />" +
    "<input onclick='incorrect3()' name='button3' type='radio' />Apple<br />"+
    "<input onclick='incorrect3()' name='button3' type='radio' />sky<br />"+
    "<input onclick='incorrect3()' name='button3' type='radio' />computer<br />"
];

var a, b, c, z;

window.onload = function() {
    a = 0;
    document.getElementById('message1').innerHTML = question1;
    document.getElementById('option1').innerHTML = choice1;
    document.getElementById('click1').innerHTML = "<button onclick='set2()'>next</button>";
}

function correct1() {
    a = 1;
}

function incorrect1() {
    a = 0;
}

function set2() {
    b = 0;
    document.getElementById('message1').innerHTML = question2;
    document.getElementById('option1').innerHTML = choice2;
    document.getElementById('click1').innerHTML = "<button onclick='set3()'>Next</button>";
}

function correct2() {
    b = 1;
}

function incorrect2() {
    b = 0;
}

function set3() {
    c = 0;
    document.getElementById('message1').innerHTML = question3;
    document.getElementById('option1').innerHTML = choice3; 
    document.getElementById('click1').innerHTML = "<button onclick='result1()'>Score</button>";
}

function correct3() {
    c = 1;
}

function incorrect3() {
    c = 0;
}

function result1() {
    z = a + b + c;
    document.getElementById('message1').innerHTML = "End of Quiz";
    document.getElementById('option1').innerHTML = ""; 
    document.getElementById('comment1').innerHTML = "Your score is: " + z; 
    document.getElementById('click1').innerHTML = "<button onclick='repeat1()'>Repeat</button>";
}

function repeat1() {
    location.reload();
}