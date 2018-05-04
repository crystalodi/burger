var mysql = require("mysql");
var connection = mysql.createConnection({
  user: "root",
  password: "WowNoU89!",
  host: "localhost",
  database: "burgers_db"
});
connection.connect(function(err){
  if(err) {
    return console.error("An error occured: " + err.stack);
  }
  console.log("Connected on " + connection.threadId);
})
module.exports = connection;