angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){
    $scope.foto = {};
    $scope.mensagem = '';
    
    if($routeParams.fotoId){
        $http.get('v1/fotos/' + $routeParams.fotoId)
        .success(function(foto){
            console.log(foto);
            $scope.foto = foto;
        })
        .error(function(erro){
           console.log('Não foi possível encontrar esta foto', erro); 
           $scope.mensagem = 'Não foi possível obter a foto';    
        });
    }
    
    console.log($routeParams.fotoId);
    
    $scope.submeter = function (){
        if($scope.formulario.$valid){
            if($scope.foto._id){
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                .success(function (){
                        $scope.mensagem = 'foto alterada com sucesso';
                        $scope.foto = {};
                    })
                .error(function (){
                        $scope.mensagem = 'não foi possível alterar a foto';
                    });
            } else {
                    $http.post('v1/fotos', $scope.foto)
                    .success(function (){
                        $scope.mensagem = 'foto cadastrada com sucesso';
                        $scope.foto = {};
                    })
                    .error(function (){
                        $scope.mensagem = 'não foi possível incluir a foto';
                    });
            }
        };
    };
});