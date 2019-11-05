var express = require("express")

var PORT = process.env.PORT || 7000;
var app = express();

var db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public/assets"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

db.sequelize.sync({ }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on http://localhost/" + PORT);
    });
});

