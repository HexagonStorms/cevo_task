import "../../node_modules/angular/angular";
import "../../node_modules/angular-route/angular-route";

var navigationStructure = require('./navigation-structure.js');
var navigationService = require('./navigation-service.js');

var categoryCtrl = function($scope, $navigationService, $routeParams) {
    console.log('Category Controller has loaded');
    console.log($navigationService);
    $scope.categoryId = $routeParams.categoryId;
};

var areaCtrl = function($scope, $navigationService, $routeParams) {
    console.log('area Controller has loaded');
    $scope.categoryId = $routeParams.categoryId;
    $scope.areaId = $routeParams.areaId;
};

var subAreaCtrl = function($scope, $navigationService, $routeParams) {
    console.log('subArea Controller has loaded');
    $scope.categoryId = $routeParams.categoryId;
    $scope.areaId = $routeParams.areaId;
    $scope.subAreaId = $routeParams.subAreaId;
};

var childCtrl = function($scope, $navigationService, $routeParams) {
    console.log('Child Controller has loaded');
    $scope.categoryId = $routeParams.categoryId;
    $scope.areaId = $routeParams.areaId;
    $scope.subAreaId = $routeParams.subAreaId;
    $scope.childId = $routeParams.childId;
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
.controller("cevoCtrl", function($scope, $navigationService, $routeParams) {
    console.log('cevo controller loaded');
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