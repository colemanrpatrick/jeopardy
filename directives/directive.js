var app =
  angular
    .module('jeopardy',[])
      .directive('jeopardyDirective', function(){
        return{
          templateUrl:"../templates/questionview.html",
          restrict:"E",
          scope:{
            question:"="
          },
      };
    });
  // });
// app.controller('this',function)

  // I want it to look like:
  // var app = angular.module('jeopardy',[])
  // app.controller('this',function($scope){
  //   $scope.show=1
  // })
