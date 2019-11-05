var db = require("../models");

module.exports = function(app) {
  
  app.get("/", function(req, res) {
      db.Burger.findAll({}).then(function(results) {
        var burgers = {burgers: results}
        res.render("index", burgers)
      });
    });

  app.post("/api/burgers", function(req, res) {
      db.Burger.create({
        burger_name: req.body.burger_name
      }).then(function(results) {
        var burgers = {burgers: results}
        res.render("index", burgers)
      });
  });

  app.put("/api/burgers/:id", function(req, res) {
      db.Burger.update({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
      }).then(function(results) {
        var burgers = {burgers: results}
        res.render("index", burgers)
      });
  });

};
