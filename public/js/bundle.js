/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var navigationStructure = __webpack_require__(2);
var navigationService = __webpack_require__(3);

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
    console.log('controller loaded');
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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var navigation = [
    {
        id: 1,
        title: "Category 1",
        areas: [
        {
            id: 1,
            title: "Area 1",
            sub_areas: []
        },
        {
            id: 2,
            title: "Area 2",
            sub_areas: []
        },
        {
            id: 3,
            title: "Area 3",
            sub_areas: []
        },
        {
            id: 4,
            title: "Area 4",
            sub_areas: []
        },
        {
            id: 5,
            title: "Area 5",
            sub_areas: []
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
                sub_areas: [
                    {
                        id: 1,
                        title: "Sub-Area 1",
                        children: [],
                    },
                    {
                        id: 2,
                        title: "Sub-Area 2",
                        children: [],
                    },
                    {
                        id: 3,
                        title: "Sub-Area 3",
                        children: [],
                    }
                ]
            },
            {
                id: 2,
                title: "Area 2",
                sub_areas: []
            },
            {
                id: 3,
                title: "Area 3",
                sub_areas: []
            },
            {
                id: 4,
                title: "Area 4",
                sub_areas: []
            },
            {
                id: 5,
                title: "Area 5",
                sub_areas: []
            },
            {
                id: 6,
                title: "Area 6",
                sub_areas: []
            },
            {
                id: 7,
                title: "Area 7",
                sub_areas: []
            },
            {
                id: 8,
                title: "Area 8",
                sub_areas: []
            },
            {
                id: 9,
                title: "Area 9",
                sub_areas: []
            },
            {
                id: 10,
                title: "Area 10",
                sub_areas: []
            },
            {
                id: 11,
                title: "Area 11",
                sub_areas: []
            },
            {
                id: 12,
                title: "Area 12",
                sub_areas: []
            },
            {
                id: 13,
                title: "Area 13",
                sub_areas: []
            },
            {
                id: 14,
                title: "Area 14",
                sub_areas: []
            },
            {
                id: 15,
                title: "Area 15",
                sub_areas: []
            },
            {
                id: 16,
                title: "Area 16",
                sub_areas: []
            },
            {
                id: 17,
                title: "Area 17",
                sub_areas: []
            },
            {
                id: 18,
                title: "Area 18",
                sub_areas: []
            },
            {
                id: 19,
                title: "Area 19",
                sub_areas: []
            },
            {
                id: 20,
                title: "Area 20",
                sub_areas: []
            },
            {
                id: 21,
                title: "Area 21",
                sub_areas: []
            },
            {
                id: 22,
                title: "Area 22",
                sub_areas: []
            },
            {
                id: 23,
                title: "Area 23",
                sub_areas: []
            },
            {
                id: 24,
                title: "Area 24",
                sub_areas: []
            },
            {
                id: 25,
                title: "Area 25",
                sub_areas: []
            },
            {
                id: 26,
                title: "Area 26",
                sub_areas: []
            },
            {
                id: 27,
                title: "Area 27",
                sub_areas: []
            },
            {
                id: 28,
                title: "Area 28",
                sub_areas: []
            },
            {
                id: 29,
                title: "Area 29",
                sub_areas: []
            },
            {
                id: 30,
                title: "Area 30",
                sub_areas: []
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
            sub_areas: [
            {
                id: 1,
                title: "Sub-Area 1",
                children: [
                {
                    id: 1,
                    title: "Child-Area 1",
                },
                {
                    id: 2,
                    title: "Child-Area 2",
                },
                {
                    id: 3,
                    title: "Child-Area 3",
                },
                {
                    id: 4,
                    title: "Child-Area 4",
                },
                {
                    id: 5,
                    title: "Child-Area 5",
                },
                {
                    id: 6,
                    title: "Child-Area 6",
                },

                ],
            },
            {
                id: 2,
                title: "Sub-Area 2",
                children: [],
            },
            ]
        },
        {
            id: 2,
            title: "Area 2",
            sub_areas: []
        },
        {
            id: 2,
            title: "Area 3",
            sub_areas: []
        },
        {
            id: 3,
            title: "Area 4",
            sub_areas: []
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
            sub_areas: [
            {
                id: 1,
                title: "Sub-Area 1",
                children: [],
            }
            ]
        },
        {
            id: 1,
            title: "Area 2",
            sub_areas: [
            {
                id: 1,
                title: "Sub-Area 1",
                children: [],
            }
            ]
        },
        {
            id: 3,
            title: "Area 3",
            sub_areas: [
            {
                id: 1,
                title: "Sub-Area 1",
                children: [],
            }
            ]
        },
        {
            id: 4,
            title: "Area 4",
            sub_areas: [
            {
                id: 1,
                title: "Sub-Area 1",
                children: [],
            }
            ]
        },
        {
            id: 5,
            title: "Area 5",
            sub_areas: [
            {
                id: 1,
                title: "Sub-Area 1",
                children: [],
            }
            ]
        }
        ]
    }
];
module.exports = navigation;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function navigationService($location) {
    console.log('in here');
    this.locationService = $location;
}

// Find which view is requested, load appropriate template/data
// Here is where we could insert any additional application logic
navigationService.prototype.navigateToCategory = function (categoryId) {
    this.locationService.path(categoryId);
};

navigationService.prototype.navigateToArea = function (categoryId, areaId) {
    this.locationService.path(categoryId + "/" + areaId);
};

navigationService.prototype.navigateToSubArea = function (categoryId, areaId, subAreaId) {
    this.locationService.path(categoryId + "/" + areaId + "/" + subAreaId);
};

navigationService.prototype.navigateToChild = function (categoryId, areaId, subAreaId, childId) {
    this.locationService.path(categoryId + "/" + areaId + "/" + subAreaId + "/" + childId);
};

// Templates for each type of view
navigationService.categoryViewPath = "/:categoryId";
navigationService.areaViewPath = "/:categoryId/:areaId";
navigationService.subAreaViewPath = "/:categoryId/:areaId/:subAreaId";
navigationService.childAreaViewPath = "/:categoryId/:areaId/:subAreaId/:childId";

module.exports = navigationService;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);