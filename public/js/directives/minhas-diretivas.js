angular.module('minhasDiretivas', [])
    .directive('meuPainel', function(){
    
    var ddo = {};
    ddo.restrict = "AE";
    ddo.scope = {
        titulo: '@'
    };
    ddo.templateUrl = 'js/directives/meu-painel.html';
    
    ddo.transclude = true;
    
    
    return ddo;    
});

angular.module('minhasDiretivas', [])
    .directive('minhaFoto', function(){
   
    var ddo = {
        restrict: "E",
        scope: {
            url: '@',
            titulo: '@'
        },
        templateUrl: 'js/directives/minha-foto.html',       
        transclude: true
    };
    
    return ddo;    
});