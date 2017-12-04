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