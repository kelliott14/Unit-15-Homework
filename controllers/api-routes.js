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
      }).then(function(result) {
        db.Burger.findAll({}).then(function(results) {
          var burgers = {burgers: results}
          res.render("index", burgers)
        });
      });
  });

  app.put("/api/burgers/:id", function(req, res) {
      db.Burger.update(
        {devoured: true},
        {where: {
          id: req.params.id
          }
        }
      ).then(function(result) {
        db.Burger.findAll({}).then(function(results) {
          var burgers = {burgers: results}
          res.render("index", burgers)
        });
      });
  });

};
