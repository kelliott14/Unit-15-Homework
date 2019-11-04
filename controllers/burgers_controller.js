var express = require("express");
var app = express();

var burger = require("../models/burger.js");

app.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });

app.post("/api/burgers", function(req, res) {
    burger.addBurger("burger_name", [req.body.burger_name], function(result) {
        res.json({id: result.insertID});
    });
});

app.put("/api/burgers/:id", function(req, res) {
    var condition = req.params.id;
    console.log("condition ", condition);

    burger.devourBurger("burgers", condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end()
        }

        res.status(200).end()
        
    });
});



module.exports = app;