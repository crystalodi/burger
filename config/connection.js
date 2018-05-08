var mysql = require("mysql");

var connection;
if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    user: "root",
    password: "WowNoU89!",
    host: "localhost",
    database: "burgers_db"
  });
}
connection.connect();
module.exports = connection;