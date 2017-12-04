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

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var navigation = [
    {
        title: "Category 1",
        sub_headers: [
            {
                title: "Area 1",
                sub_headers: []
            },
            {
                title: "Area 2",
                sub_headers: []
            },
            {
                title: "Area 3",
                sub_headers: []
            },
            {
                title: "Area 4",
                sub_headers: []
            },
            {
                title: "Area 5",
                sub_headers: []
            }
        ]
    },
    {
        title: "Category 2",
        sub_headers: [
            {
                title: "Area 1",
                sub_headers: [
                    {
                        title: "Sub-Area 1",
                        sub_headers: [],
                    },
                    {
                        title: "Sub-Area 2",
                        sub_headers: [],
                    },
                    {
                        title: "Sub-Area 3",
                        sub_headers: [],
                    }
                ]
            },
            {
                title: "Area 2",
                sub_headers: []
            },
            {
                title: "Area 3",
                sub_headers: []
            },
            {
                title: "Area 4",
                sub_headers: []
            }
        ]
    },
    {
        title: "Category 3",
        sub_headers: [
            {
                title: "Area 1",
                sub_headers: [
                    {
                        title: "Sub-Area 1",
                        sub_headers: [
                            {
                                title: "Child-Area 1",
                                sub_headers: [],
                            },
                            {
                                title: "Child-Area 2",
                                sub_headers: [],
                            },
                            {
                                title: "Child-Area 3",
                                sub_headers: [],
                            },
                            {
                                title: "Child-Area 4",
                                sub_headers: [],
                            },
                            {
                                title: "Child-Area 5",
                                sub_headers: [],
                            },
                            {
                                title: "Child-Area 6",
                                sub_headers: [],
                            },
                            
                        ],
                    },
                    {
                        title: "Sub-Area 2",
                        sub_headers: [],
                    },
                ]
            },
            {
                title: "Area 2",
                sub_headers: []
            },
            {
                title: "Area 3",
                sub_headers: []
            },
            {
                title: "Area 4",
                sub_headers: []
            }
        ]
    },
    {
        title: "Category 4",
        sub_headers: [
            {
                title: "Area 1",
                sub_headers: [
                    {
                        title: "Sub-Area 1",
                        sub_headers: [],
                    }
                ]
            },
            {
                title: "Area 2",
                sub_headers: [
                    {
                        title: "Sub-Area 1",
                        sub_headers: [],
                    }
                ]
            },
            {
                title: "Area 3",
                sub_headers: [
                    {
                        title: "Sub-Area 1",
                        sub_headers: [],
                    }
                ]
            },
            {
                title: "Area 4",
                sub_headers: [
                    {
                        title: "Sub-Area 1",
                        sub_headers: [],
                    }
                ]
            },
            {
                title: "Area 5",
                sub_headers: [
                    {
                        title: "Sub-Area 1",
                        sub_headers: [],
                    }
                ]
            }
        ]
    }
];


angular.module("cevoApp", ["ngRoute"])
    // .service("$navigationService", navigationService)
    .config(["$routeProvider", function(routeProvider) {
        routeProvider
        .when("/", {
            templateUrl: "../views/main.html"
        })
        .when("/:category", {
            templateUrl: "../views/category.html"
        })
        .when("/:category/:area", {
            templateUrl: "../views/area.html"
        })
        .when("/:category/:subarea", {
            templateUrl: "../views/subarea.html"
        })
        .when("/:category/:subarea/:child", {
            templateUrl: "../views/child.html"
        })
        .otherwise({
           redirectTo: '/' 
        });
    }])

/***/ })
/******/ ]);