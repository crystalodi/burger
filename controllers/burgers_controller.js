var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
  burger.all(function(data){
    console.log(data);
    res.render("index", {burgers: data});
  });
});

router.put("/api/burgers/:id", function(req, res){
  var objColsUpdate = {
    "devoured": req.body.devoured
  }
  var condition = "where id = " + req.params.id;
  burger.update(objColsUpdate, condition, function(result){
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
})

router.post("/api/burgers", function(req, res){
  var cols = ["burger_name"];
  var values = [req.body.burger_name]
  burger.add(cols, values, function(result){
    res.json({ id: result.insertId });
  })
})

module.exports = router;