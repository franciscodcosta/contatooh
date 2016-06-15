var http = require ('http');
var app = require('./config/express')();
require('./config/database.js')('mongodb://104.197.173.17/contatooh');
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express Server escutando na porta ' + app.get('port'));
});
