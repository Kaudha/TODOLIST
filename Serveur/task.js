var mysql = require('mysql');

var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'todolist'
});

var connection = mysql.createConnection({
  host: "localhost",
  user: "yroot",
  password: "",
  database: "todolist"
});




add = function(){

};

addTask = function(){
	connection.query("SELECT * FROM users WHERE Name ="+email+" AND Password = "+password, function (error, results, fields){
	if (err) throw err;		
};

connection = function(email, password){
	connection.query("SELECT * FROM users WHERE Name ="+email+" AND Password = "+password, function (error, results, fields){
		if (err) throw err;
		if (results != null) {
			return true;
		};
		return false;
	});
};

verification = function(email){
	connection.query("SELECT * FROM users WHERE Name ="+email, function (error, results, fields){
		if (err) throw err;
		if (results != null) {
			return true;
		};
		return false;
	});

};

register = function(email, password){

};






