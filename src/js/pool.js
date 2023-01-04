const mysql = require("mysql2");

const connectionOptions = {
  host: "localhost",
  user: "root",
  password: "olegoofy",
  database: "mydb",
};

const pool = mysql.createConnection(connectionOptions);

module.exports = { pool };