var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  },
  add: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res){
      cb(res);
    });

  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, function(res){
      cb(res);
    });
  }
}

module.exports = burger;