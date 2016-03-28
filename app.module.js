var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jeopardy',["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: "templates/homeview.html",
        controller: "homeController"
      })
      .when('/question-view', {
        templateUrl: 'templates/questionview.html',
        controller: 'homeController'
      });
  });
require("./controllers/app.controller.js");
require("./app.services.js");
require("./app.cacheservice.js");
require("./directives/directive.js");
