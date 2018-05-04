var connection = require("../config/connection");
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

  },
  updateOne: function(table, cols, vals, cb) {

  }
};
module.exports = orm;