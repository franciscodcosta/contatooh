var contatos = [
	{_id: 1, nome: 'Nome 1', email: 'email1@teste.com.br'},
	{_id: 2, nome: 'Nome 2', email: 'email2@teste.com.br'},
	{_id: 3, nome: 'Nome 3', email: 'email3@teste.com.br'},
];

module.exports = function(){
	var controller = {};
	controller.listaContatos = function(req, res){
		res.json(contatos);
	};
	controller.obtemContato = function(req, res){
		var idContato = req.params.id;
		var contato = contatos.filter(function(contato){
			return contato._id == idContato;
		})[0];
		contato ?
			res.json(contato) :
			res.status(404).send('Contato não encontrado.');
	};
	controller.removeContato = function (req, res){
		var idContato = req.params.id;
		contatos = contatos.filter(function(contato){
			return contato._id != idContato;
		});
		res.status(204).end();
		console.log('API: removeContato: ');
	};

	return controller;


};
