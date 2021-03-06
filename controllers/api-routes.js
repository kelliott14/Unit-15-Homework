var db = require("../models");

module.exports = function(app) {
  
  app.get("/", function(req, res) {
      db.Burger15.findAll({
        include: [ db.User ],
      }).then(function(results) {
        var burgers = {burgers: results}
        res.render("index", burgers)
      });
    });

  app.post("/api/burger15s", function(req, res) {
      db.Burger15.create({
        burger_name: req.body.burger_name,
        UserId: 1
      }).then(function(result) {
        db.Burger15.findAll({}).then(function(results) {
          var burgers = {burgers: results}
          res.render("index", burgers)
        });
      });
  });

  app.put("/api/burger15s/:id", function(req, res) {
    

      db.User.create({
        name: req.body.name
      }).then(function(result) {
        

        db.User.findAll({
          limit: 1,
          order: [["createdAt", "DESC"]]
        }).then(function(newUser) {
          var devouredBy = newUser[0].dataValues.id;
          
          
            db.Burger15.update(
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

                  db.Burger15.findAll({}).then(function(results) {
                    
                    var burgers = {burgers: results}
                    res.render("index", burgers)
                  });
                });

        })
      })

      
  });

};
