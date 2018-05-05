var connection = require("../config/connection.js");
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}
var orm = {
  selectAll: function(table, cb) {
    var queryToRun = "select * from " + table;
    connection.query(queryToRun, function(err, results){
      if(err) {
        throw err;
      }
      cb(results);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var queryToRun = "insert into " + table;
    queryToRun += " ("+ cols.toString() + ") ";
    queryToRun += "values"
    queryToRun += " (" + printQuestionMarks(cols.length) + ")";
    console.log(queryToRun);
    var query = connection.query(queryToRun, vals, function(err, results){
      if(err) {
        throw err;
      }
      cb(results);
      console.log(query.sql);
    });
  },
  updateOne: function(table, cols, vals, cb) {

  }
};
module.exports = orm;