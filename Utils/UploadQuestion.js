import Question from "../Models/Questions.js";
const quizQuestions = [
    {
      _id: "1",
      question: "Which command is used to start a MongoDB server?",
      options: ["mongod", "mongo start", "npm start", "mongodb-server"],
      correctAnswer: "mongod"
    },
    {
      _id: "2",
      question: "What does the 'M' in MERN stack stand for?",
      options: ["MySQL", "MongoDB", "Mongoose", "MariaDB"],
      correctAnswer: "MongoDB"
    },
    {
      _id: "3",
      question: "Which method is used to create a new document in a MongoDB collection using Mongoose?",
      options: ["insertOne()", "createDocument()", "save()", "newDocument()"],
      correctAnswer: "save()"
    },
    {
      _id: "4",
      question: "How do you start a React application locally?",
      options: ["npm react-start", "npm start", "react run", "npm init"],
      correctAnswer: "npm start"
    },
    {
      _id: "5",
      question: "Which of the following is a state management tool commonly used with React?",
      options: ["Axios", "Redux", "Express", "Lodash"],
      correctAnswer: "Redux"
    },
    {
      _id: "6",
      question: "Which HTTP method is used to update an existing resource?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correctAnswer: "PUT"
    },
    {
      _id: "7",
      question: "What is the default port for a Node.js application running on Express?",
      options: ["80", "3000", "8080", "5000"],
      correctAnswer: "3000"
    },
    {
      _id: "8",
      question: "Which of the following is used to define routes in an Express.js application?",
      options: ["app.render()", "app.route()", "app.use()", "app.get()"],
      correctAnswer: "app.get()"
    },
    {
      _id: "9",
      question: "How do you install dependencies listed in a package.json file?",
      options: ["npm add", "npm get", "npm install", "npm fetch"],
      correctAnswer: "npm install"
    },
    {
      _id: "10",
      question: "Which of the following is a NoSQL database?",
      options: ["MySQL", "PostgreSQL", "MongoDB", "OracleDB"],
      correctAnswer: "MongoDB"
    }
  ];

try {
    Question.insertMany(quizQuestions);
} catch (error) {
    console.log(Error);
    
}

