var connection = require("./connection.js");

var orm = {
    addBurger: function(table, burger_name) {
        var queryString = "INSERT INTO ?? (burger_name) VALUES(?)";
        connection.query(queryString, [table, burger_name], function(err, result){
            if (err) 
                throw err;
            

        });
    },

    devourBurger: function(table, id) {
        var queryString = "UPDATE ?? SET devoured = 1 WHERE id = ?";
        connection.query(queryString, [table, id], function(err, result){
            if (err) 
                throw err
            
        });
    },

    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
          
        });
      }
};

module.exports = orm;