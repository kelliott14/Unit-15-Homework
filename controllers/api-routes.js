var db = require("../models");

module.exports = function(app) {
  
  app.get("/", function(req, res) {
      db.Burger.findAll({
        include: [ db.User ],
      }).then(function(results) {
        var burgers = {burgers: results}
        res.render("index", burgers)
      });
    });

  app.post("/api/burgers", function(req, res) {
      db.Burger.create({
        burger_name: req.body.burger_name,
        UserId: 1
      }).then(function(result) {
        db.Burger.findAll({}).then(function(results) {
          var burgers = {burgers: results}
          res.render("index", burgers)
        });
      });
  });

  app.put("/api/burgers/:id", function(req, res) {
    console.log("line 24-------------------------------------------------------")

      db.User.create({
        name: req.body.name
      }).then(function(result) {
        console.log("new user created")

        db.User.findAll({
          limit: 1,
          order: [["createdAt", "DESC"]]
        }).then(function(newUser) {
          var devouredBy = newUser[0].dataValues.id;
          console.log(devouredBy)
          
            db.Burger.update(
               {
                 devoured: true,
                 UserID: devouredBy
                },
                 {
                  where: {
                  id: req.params.id
                  }
                }
                ).then(function(result) {

                  db.Burger.findAll({}).then(function(results) {
                    
                    var burgers = {burgers: results}
                    res.render("index", burgers)
                  });
                });

        })
      })

      
  });

};
