angular.module('contatooh').controller('ContatosController', function ($scope){
  $scope.total = 0;
  $scope.incrementa = function(){
    $scope.total++;
  };
  $scope.contatos = [
    {
      "_id": 1,
      "nome": "João da Silva 1",
      "email": "joao1@teste.com"
    },
    {
      "_id": 2,
      "nome": "João da Silva 2",
      "email": "joao2@teste.com"
    },
    {
      "_id": 3,
      "nome": "João da Silva 3",
      "email": "joao3@teste.com"
    }
  ];
  $scope.filtro ='';
});
