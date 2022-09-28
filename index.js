import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import Joi from 'joi';


const app = express();
app.use(cors())
app.use(express.json());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });





  const questions = [
    {
    number: 1,
    question: "Which of the following is not valid variable declaration in JavaScript?",
    answer: "declare",
    options: [
      "var",
      "declare",
      "const",
      "let"
    ]
  },
    {
    number: 2,
    question: "What is hoisting?",
    answer: "The process where the interpreter moves the declaration of classes, functions, or variables to the top of their scope, before their execution",
    options: [
      "The process wherein the interpreter warns of excessive variables declared in the global variable namespace",
      "Renaming duplicate variables",
      "JavaScript\'s type-checking feature added in ES6",
      "The process where the interpreter moves the declaration of classes, functions, or variables to the top of their scope, before their execution"
    ]
  },
    {
    number: 3,
    question: "Which attribute can be used to link external JavaScript?",
    answer: "src",
    options: [
      "script",
      "ext",
      "link",
      "src"
    ]
  },
    {
    number: 4,
    question: "Which operator is used to check for strict equality in JavaScript?",
    answer: "===",
    options: [
      "==",
      "===",
      "=>",
      "="
    ]
  },
    {
    number: 5,
    question: "Which of the following is not a valid way to insert JavaScript code in an HTML file?",
    answer: "socket connection",
    options: [
      "external",
      "socket connection",
      "internal",
      "inline"
    ]
  },
  {
    number: 6,
    question: "Which of the following is a popular JavaScript framework?",
    answer: "React",
    options: [
      "React",
      "Script King",
      "MooveJS",
      "Angle Base"
    ]
  },
  {
    number: 7,
    question: "Which of the following cannot be used to change the contents of an HTML tag?",
    answer: "updateHTML",
    options: [
      "textContent",
      "innerHTML",
      "updateHTML",
      "innerText"
    ]
  },
  {
    number: 8,
    question: "What does the following problem return in JavaScript: 2 + 2 - '2'?",
    answer: "2",
    options: [
      "2",
      "'2'",
      "0",
      "'0'"
    ]
  },
  {
    number: 9,
    question: "Which JavaScript keyword is used to refer to the currently calling object?",
    answer: "this",
    options: [
      "this",
      "self",
      "response",
      "open"
    ]
  },
  {
    number: 10,
    question: "Which method can be used to create a cookie using JavaScript?",
    answer: `document.cookie = "key1 = value1; key2 = value2; expires = date";`,
    options: [
      `create.cookie = "key1 = value1; key2 = value2; expires = date";`,
      `document.cookie = "key1 = value1; key2 = value2; expires = date";`,
      `this.cookie = "key1 = value1; key2 = value2; expires = date";`,
      `open.cookie = "key1 = value1; key2 = value2; expires = date";`
    ]
  },
  {
    number: 11,
    question: "Which is not a valid JavaScript function?",
    answer: "let functionName{return 1+1}",
    options: [
      "const functionName=()=>{return 1+1} ",
      "function functionName(){return 1+1}",
      "let functionName{return 1+1}",
      "const functionName = function(){return 1+1}"
    ]
  },
  {
    number: 12,
    question: "Which is not a valid function type in JavaScript?",
    answer: "Circulatory Function",
    options: [
      "Arrow Function",
      "Function Declaration",
      "Function Expression",
      "Circulatory Function"
    ]
  },
  {
    number: 13,
    question: "Which of the following is not a characteristic of strict mode?",
    answer: "Forces static typing",
    options: [
      "Does not allow duplicate arguments or global variables",
      "Forbids keywords as parameters or function names",
      "Defined at the start of the script with the keyword 'use strict'",
      "Forces static typing"
    ]
  },
  {
    number: 14,
    question: "What is memoization?",
    answer: "Caching the return value of a function concerning its parameters",
    options: [
      "Capturing the line and column values of errors found while debugging",
      "Creating multiple returns within a single function",
      "Caching the return value of a function concerning its parameters",
      "Scanning your code for unused lines"
    ]
  },
  {
    number: 15,
    question: "What are the four states of JavaScript promises?",
    answer: "Pending, fulfilled, rejected, settled",
    options: [
      "Pending, fulfilled, rejected, successful",
      "Pending, fulfilled, rejected, settled",
      "Await, synching, denied, settled",
      "Awaiting, synching, denied, successful"
    ]
  },
  {
    number: 16,
    question: "Which command can be used to detect the OS of the client machine?",
    answer: "navigator.appVersion",
    options: [
      "navigator.appVersion",
      "window.Version()",
      "open.machine.currVersion",
      "document.machine.appVersion"
    ]
  },
  {
    number: 17,
    question: "What is the DOM?",
    answer: "Document Object Model",
    options: [
      "Dynamic Object Modal",
      "Document Object Model",
      "Destructured Oriented Messages",
      "Detailed Object Modal"
    ]
  },
  {
    number: 18,
    question: "Which of the following is not a valid JavaScript pop-up?",
    answer: "create()",
    options: [
      "alert()",
      "prompt()",
      "confirm()",
      "create()"
    ]
  },
  {
    number: 19,
    question: "What is the push method used to accomplish in JavaScript?",
    answer: "To add or append one or more elements to the end of an array",
    options: [
      "To create a new instance of a class",
      "To dynamically update an object",
      "To add or append one or more elements to the end of an array",
      "To automatically increment digits by one"
    ]
  },
  {
    number: 20,
    question: "Which of the following is not a JavaScript method for timers?",
    answer: "create()",
    options: [
      "setTimeout()",
      "setInterval()",
      "clearTimeout()",
      "clearInterval()"
    ]
  }
  
  
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/api/questions', (req, res) => {
    res.send(questions)
})

app.get('/api/questions/:id', (req, res) => {
    const question = questions.find(e => e.id === parseInt(req.params.id));
    if (!question) return res.status(404).send('The question with the given ID was not found.')
    res.send(question)
})

app.post('/api/questions', (req, res) => {
    const { error } = validateQuestion(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const question = {
        id: questions.length + 1,
        question: req.body.question,
        answers: req.body.answers,
        correctAnswer: req.body.correctAnswer
    }
    questions.push(question);
    res.send(question);
})


app.put('/api/questions/:id', (req, res) => {
    const question = questions.find(e => e.id === parseInt(req.params.id))
    if (!question) return res.status(404).send('No question with that ID');

    const { error } = validateQuestion(req.body);
    if (error) return res.status(400).send(error.details[0].message)

    question.correctAnswer = req.body.correctAnswer;
    res.send(question)
})

app.delete('/api/questions/:id', (req, res) => {
    const question = questions.find(e => e.id === parseInt(req.params.id));
    if(!question) return res.status(404).send('No question with that ID');

    const index = questions.indexOf(question);
    questions.splice(index, 1)

    res.send(question)
})

function validateQuestion(question){
    const schema = {
        question: Joi.string().min(3).required()
    };
    return Joi.valid(question, schema)
}

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`API server is running on port ${port}...`));
