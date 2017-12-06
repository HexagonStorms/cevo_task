// Import Angular + Angular Router
import "../../node_modules/angular/angular";
import "../../node_modules/angular-route/angular-route";

// Mock JSON of Navigation Structure
var navigationStructure = require('./navigation-structure.js');
// Load the Navigation Service
var navigationService = require('./navigation-service.js');

// Controllers
var categoryCtrl = function($scope, $navigationService) {
    console.log('Category Controller loaded');
    $scope.routes = $navigationService.routes;
};

var areaCtrl = function($scope, $navigationService) {
    console.log('Area Controller loaded');
    $scope.routes = $navigationService.routes;
};

var subAreaCtrl = function($scope, $navigationService) {
    console.log('Sub-Area Controller loaded');
    $scope.routes = $navigationService.routes;
};

var childCtrl = function($scope, $navigationService) {
    console.log('Child Controller loaded');
    $scope.routes = $navigationService.routes;
};

// Application Routes + Angular Instantiation
angular
.module("cevoApp", ["ngRoute"])
.service("$navigationService", navigationService)
.config(["$routeProvider", function(routeProvider) {
    routeProvider
    .when("/", {
        templateUrl: "../views/main.html"
    })
    .when(navigationService.categoryViewPath, {
        templateUrl: "../views/category.html",
        controller: categoryCtrl
    })
    .when(navigationService.areaViewPath, {
        templateUrl: "../views/area.html",
        controller: areaCtrl
    })
    .when(navigationService.subAreaViewPath, {
        templateUrl: "../views/subarea.html",
        controller: subAreaCtrl
    })
    .when(navigationService.childAreaViewPath, {
        templateUrl: "../views/child.html",
        controller: childCtrl
    })
    .otherwise({
       redirectTo: '/' 
    });
}])

// Main Application Controller for Navigation Menu
.controller("cevoCtrl", function($scope, $navigationService) {
    console.log('CEVO Main Controller loaded');
    $scope.navigation = navigationStructure;
    
    $scope.goToCategory = function(categoryId) {
        $navigationService.navigateToCategory(categoryId);
    }
    
    $scope.goToArea = function(categoryId, areaId) {
        $navigationService.navigateToArea(categoryId, areaId);
    }
    
    $scope.goToSubArea = function(categoryId, areaId, subAreaId) {
        $navigationService.navigateToSubArea(categoryId, areaId, subAreaId);
    }
    
    $scope.goToChild = function(categoryId, areaId, subAreaId, childId) {
        $navigationService.navigateToChild(categoryId, areaId, subAreaId, childId);
    }
});

// Mock App Karma/Jasmine Testing
(function() {
  'use strict';
  angular.module('mockApp', [])
  .service('NavigationService', function() {
    var NavigationService = navigationService;
    return NavigationService;
  });
})();