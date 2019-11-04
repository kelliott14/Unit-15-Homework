var mySQL = require("mysql")
var connection;

if (process.env.JAWSDB_URL) {
    connection = mySQL.createConnection(process.env.JAWSDB_URL);
}else{

    connection = mySQL.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password : "",
    database : 'burgers_db'
  });
};

  connection.connect(function(err){
      if(err) {
          console.log("error connection: " + err.stack);
          return
      }
      console.log("connected as id " + connection.threadId);
  })

  module.exports = connection