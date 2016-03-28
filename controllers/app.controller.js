var angular = require('angular');
angular
  .module('jeopardy')
  .controller('homeController', function($scope, $http, $q, $location, services, cacheEngine){
    console.log('its working');
    alert('hi')
    if (cacheEngine.get('currentQuestion')){
      var cache =cacheEngine.get('currentQuestion');
      $scope.categories = cache;
    }else{
      services.allCategories()
        .then(function(data){
          console.log("I NEED DATA", data);
          cacheEngine.put('currentQuestion', data);
          $scope.categories= data;
          console.log('these categories',$scope.categories);
        });
    }

    $scope.showAnswer = function () {
      $scope.show = true;
    }

    // services.allCategories().then(function(data) {
    //   $scope.categories = data;
    // })

});
