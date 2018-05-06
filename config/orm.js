var connection = require("../config/connection.js");
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
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
  updateOne: function(table, cols, condition, cb) {
    var queryToRun = "update " + table;
    queryToRun += " set " + objToSql(cols) + " " + condition;
    console.log(queryToRun);
    var query = connection.query(queryToRun, function(err, results){
      if(err) {
        throw err;
      }
      cb(results)
      console.log(query.sql);
    });
  }
};
module.exports = orm;