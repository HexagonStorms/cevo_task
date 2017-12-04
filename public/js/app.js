console.log('hello world');
function navigationService($location) {
    console.log('in here');
    this.locationService = $location;
}

// Find which View is requested, load appropriate template/data
navigationService.prototype.navigateToCategory = function (category) {
    this.locationService.path(category);
};

navigationService.prototype.navigateToArea = function (category, area) {
    this.locationService.path(category + "/" + area);
};

navigationService.prototype.navigateToSubArea = function (category, area, subArea) {
    this.locationService.path(category + "/" + area + "/" + subArea);
};

navigationService.prototype.navigateToChild = function (category, area, subArea, child) {
    this.locationService.path(category + "/" + area + "/" + subArea + "/" + child);
};

// Templates for each type of view
navigationService.categoryViewPath = "/:category";
navigationService.areaViewPath = "/:category/:area";
navigationService.subAreaViewPath = "/:category/:subarea";
navigationService.childAreaViewPath = "/:category/:subarea/:child";
navigationService.$inject = ["$location"];

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
        templateUrl: "../views/category.html"
    })
    .when(navigationService.areaViewPath, {
        templateUrl: "../views/area.html"
    })
    .when(navigationService.subAreaViewPath, {
        templateUrl: "../views/subarea.html"
    })
    .when(navigationService.childAreaViewPath, {
        templateUrl: "../views/child.html"
    })
    .otherwise({
       redirectTo: '/' 
    });
}])

// Main Application Controller for Navigation Menu
.controller("cevoCtrl", function($scope, $navigationService) {
    console.log('controller loaded');
    $scope.navigation = [
        {
            id: 1,
            title: "Category 1",
            areas: [
                {
                    id: 1,
                    title: "Area 1",
                    sub_headers: []
                },
                {
                    id: 2,
                    title: "Area 2",
                    sub_headers: []
                },
                {
                    id: 3,
                    title: "Area 3",
                    sub_headers: []
                },
                {
                    id: 4,
                    title: "Area 4",
                    sub_headers: []
                },
                {
                    id: 5,
                    title: "Area 5",
                    sub_headers: []
                }
            ]
        },
        {
            id: 2,
            title: "Category 2",
            areas: [
                {
                    id: 1,
                    title: "Area 1",
                    sub_headers: [
                        {
                            id: 1,
                            title: "Sub-Area 1",
                            sub_headers: [],
                        },
                        {
                            id: 2,
                            title: "Sub-Area 2",
                            sub_headers: [],
                        },
                        {
                            id: 3,
                            title: "Sub-Area 3",
                            sub_headers: [],
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Area 2",
                    sub_headers: []
                },
                {
                    id: 3,
                    title: "Area 3",
                    sub_headers: []
                },
                {
                    id: 4,
                    title: "Area 4",
                    sub_headers: []
                }
            ]
        },
        {
            id: 3,
            title: "Category 3",
            areas: [
                {
                    id: 1,
                    title: "Area 1",
                    sub_headers: [
                        {
                            id: 1,
                            title: "Sub-Area 1",
                            sub_headers: [
                                {
                                    id: 1,
                                    title: "Child-Area 1",
                                    sub_headers: [],
                                },
                                {
                                    id: 2,
                                    title: "Child-Area 2",
                                    sub_headers: [],
                                },
                                {
                                    id: 3,
                                    title: "Child-Area 3",
                                    sub_headers: [],
                                },
                                {
                                    id: 4,
                                    title: "Child-Area 4",
                                    sub_headers: [],
                                },
                                {
                                    id: 5,
                                    title: "Child-Area 5",
                                    sub_headers: [],
                                },
                                {
                                    id: 6,
                                    title: "Child-Area 6",
                                    sub_headers: [],
                                },
                                
                            ],
                        },
                        {
                            id: 2,
                            title: "Sub-Area 2",
                            sub_headers: [],
                        },
                    ]
                },
                {
                    id: 2,
                    title: "Area 2",
                    sub_headers: []
                },
                {
                    id: 2,
                    title: "Area 3",
                    sub_headers: []
                },
                {
                    id: 3,
                    title: "Area 4",
                    sub_headers: []
                }
            ]
        },
        {
            id: 4,
            title: "Category 4",
            areas: [
                {
                    id: 1,
                    title: "Area 1",
                    sub_headers: [
                        {
                            id: 1,
                            title: "Sub-Area 1",
                            sub_headers: [],
                        }
                    ]
                },
                {
                    id: 1,
                    title: "Area 2",
                    sub_headers: [
                        {
                            id: 1,
                            title: "Sub-Area 1",
                            sub_headers: [],
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Area 3",
                    sub_headers: [
                        {
                            id: 1,
                            title: "Sub-Area 1",
                            sub_headers: [],
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Area 4",
                    sub_headers: [
                        {
                            id: 1,
                            title: "Sub-Area 1",
                            sub_headers: [],
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Area 5",
                    sub_headers: [
                        {
                            id: 1,
                            title: "Sub-Area 1",
                            sub_headers: [],
                        }
                    ]
                }
            ]
        }
    ];
    
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