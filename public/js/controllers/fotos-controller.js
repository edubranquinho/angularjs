angular.module('alurapic').controller('FotosController', function($scope, recursoFoto){
    
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    recursoFoto.query(function(fotos){
         $scope.fotos = fotos;
    }, function(erro){
         console.log(erro); 
    });
    
    
    $scope.remover = function(foto){
        recursoFoto.delete({fotoId: foto._id}, function(){
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
        }, function(){
            console.log(erro);
            $scope.mensagem = 'Nao foi possivel remover a foto ' + foto.titulo;
        });
    }
    
    
    
    /*
    $http.get('v1/fotos')
    .success(function(fotos){
        $scope.fotos = fotos;
    })
    .error(function(erro){
        console.log(erro);   
    });
    
   
    var promise = $http.get('v1/fotos');
    promise.then(function(retorno){
        $scope.fotos = retorno.data;
    }).catch(function(error){
        console.log(error);
    });
            
    $scope.remover = function(foto){
        $http.delete('v1/fotos/' + foto._id)
        .success(function(){
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
        })
        .error(function(erro){
               console.log(erro);
               $scope.mensagem = 'Nao foi possivel remover a foto ' + foto.titulo;
        });
    };
    */
});