module.exports = function(app){
	var Contato = app.models.contato;
	var controller = {};
	controller.listaContatos = function(req, res){};
	controller.obtemContato = function(req, res){};
	controller.removeContato = function (req, res){};
	controller.salvaContato = function (req, res){};
	return controller;


};
