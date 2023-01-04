const Model = require("./models");

class Controllers {
  static resHandler = (res, data) => {
    if (data) {
      res.send(data);
    } else {
      res.sendStatus(404);
    }
  };
  static getQuiz = async (req, res) => {
    await Model.getQuizById(req.params).then((result) => {
      this.resHandler(res, result);
    });
  };
  static getQuizzes = async (req, res) => {
    await Model.getAllQuizzes().then((result) => {
      this.resHandler(res, result);
    });
  };
  static getUserQuizzes = async (req, res) => {
    await Model.getQuizzesByUserId(req.params).then((result) => {
      this.resHandler(res, result);
    });
  };
  static createQuiz = async (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const id = Math.ceil(Math.random() * (100 - 1) * Math.random() * (100 - 1));
    const date = Date.now();
    await Model.postQuiz({ id, date, ...req.body })
      .then(() => Model.getQuizById({ id }))
      .then((result) => {
        this.resHandler(res, result);
      });
  };
  static deleteQuiz = async (req, res) => {
    await Model.deleteQuizById(req.params).then((result) => {
      this.resHandler(res, result);
    });
  };
  static updateQuiz = async (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const date = Date.now();
    await Model.updateQuizById(req.params, { date, ...req.body })
      .then(() => Model.getQuizById(req.params))
      .then((result) => {
        this.resHandler(res, result);
      });
  };
}

module.exports = Controllers;