var navigationStructure = require('./navigation-structure.js');
var navigationService = require('./navigation-service.js');

var categoryCtrl = function($scope, $navigationService, $routeParams) {
    console.log('Category Controller has loaded');
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

// Routes + Angular Instantiation
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
    console.log('controller loaded');
    $scope.navigation = navigationStructure;
    
    $scope.goToCategory = function(category) {
        $navigationService.navigateToCategory(category);
    }
    
    $scope.goToArea = function(category, area) {
        $navigationService.navigateToArea(category, area);
    }
    
    $scope.goToSubArea = function(category, area, subArea) {
        $navigationService.navigateToSubArea(category, area, subArea);
    }
    
    $scope.goToChild = function(category, area, subArea, child) {
        $navigationService.navigateToChild();
    }
});