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
__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports) {



/***/ }),
/* 2 */
/***/ (function(module, exports) {

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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);