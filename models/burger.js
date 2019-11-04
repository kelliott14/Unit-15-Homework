var orm = require("../config/orm.js");

var burger = {
    addBurger: function(table, burger_name, cb) {
        orm.addBurger("burgers", burger_name), function(res) {
            cb(res)
        };
    },

    devourBurger: function(table, id, cb) {
        orm.devourBurger(table, id), function(res) {
            cb(res)
        };
    },

    all: function(cb) {
        orm.all("burgers", function(res) {
          cb(res);
          
        });
      }
}

module.exports = burger;

