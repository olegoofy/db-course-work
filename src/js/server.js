const express = require("express");
const Controllers = require("./controllers");
const app = express();
const jsonParse = express.json();

app.get("/quiz/:id", Controllers.getQuiz);

app.get("/quizzes/", Controllers.getQuizzes);

app.get("/userquizzes/:id", Controllers.getUserQuizzes);

app.post("/quiz/", jsonParse, Controllers.createQuiz);

app.delete("/quiz/:id", Controllers.deleteQuiz);

app.put("/quiz/:id", jsonParse, Controllers.updateQuiz);

app.listen(2222);