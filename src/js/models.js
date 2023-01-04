const { pool } = require("./pool");

class Model {
  static processingFunction = (sql) => {
    return new Promise((resolve) => {
      pool.connect(function(err) {
        if (err) throw err;
        return pool.query(sql, (err, result) => {
          if (err) throw err;
          resolve(result);
        });
      });
    });
  };
  static sqlHandler = {
    getById: ({ id }) => `SELECT * FROM mydb.quiz WHERE id = ${id}`,
    getAll: () => `SELECT * from mydb.quiz`,
    getByUserId: ({ id }) => `SELECT * from mydb.quiz WHERE creator_id = ${id}`,
    create: ({ id, creator_id, type, text, topic, date }) =>
      `INSERT INTO mydb.quiz (id, type, text, creator_id, topic, date) VALUES (${id},\"${type}\", \"${text}\", ${creator_id}, \"${topic}\", ${date})`,
    delete: ({ id }) => `DELETE FROM mydb.quiz WHERE id = ${id}`,
    update: ({ id }, { type, text, topic, date }) =>
      `UPDATE mydb.quiz SET type = \"${type}\", text = \"${text}\", topic = \"${topic}\", date = ${date} WHERE id = ${id} `,
  };
  static getQuizById = (data) => {
    return this.processingFunction(this.sqlHandler.getById(data));
  };
  static getAllQuizzes = () => {
    return this.processingFunction(this.sqlHandler.getAll());
  };
  static getQuizzesByUserId = (data) => {
    return this.processingFunction(this.sqlHandler.getByUserId(data));
  };
  static postQuiz = (data) => {
    return this.processingFunction(this.sqlHandler.create(data));
  };
  static deleteQuizById = (data) => {
    return this.processingFunction(this.sqlHandler.delete(data)).then(
      () => `Quiz(id: ${data.id}) was deleted!`
    );
  };
  static updateQuizById = (params, data) => {
    return this.processingFunction(this.sqlHandler.update(params, data));
  };
}

module.exports = Model;