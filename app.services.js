angular
  .module("jeopardy")
  .service("services", function($http, $q, $cacheFactory){

    var url= "http://jservice.io/api/category?id=";
    console.log("questions","http://jservice.io/api/category?id=200");

    function getCategories(){
      var rando = Math.floor(Math.random() * 1200);
      return $http.get(url + rando)
    }
    function allCategories() {
      return $q.all([getCategories(),getCategories(),getCategories(),getCategories()]);
    }

    return {
      getCategories: getCategories,
      allCategories: allCategories
    };
  });
