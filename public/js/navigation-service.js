function navigationService($location) {
    this.locationService = $location;
    
    // Find which view is requested, load appropriate template/data
	// Here is where we could insert any additional application logic
	// Creating a route params object for demonstrative purposes, although $routeParams can do the same thing
    this.navigateToCategory = function (categoryId) {
    	this.locationService.path(categoryId);
    	this.routes = {
    	category: categoryId
    	};
    }
    
    this.navigateToArea = function (categoryId, areaId) {
	    this.locationService.path(categoryId + "/" + areaId);
	    this.routes = {
	    	category: categoryId,
	    	area: areaId
	    };
	};
	
	this.navigateToSubArea = function (categoryId, areaId, subAreaId) {
	    this.locationService.path(categoryId + "/" + areaId + "/" + subAreaId);
	    this.routes = {
	    	category: categoryId,
	    	area: areaId,
	    	subArea: subAreaId
	    };
	};
	
	this.navigateToChild = function (categoryId, areaId, subAreaId, childId) {
	    this.locationService.path(categoryId + "/" + areaId + "/" + subAreaId + "/" + childId);
	    this.routes = {
	    	category: categoryId,
	    	area: areaId,
	    	subArea: subAreaId,
	    	child: childId
	    };
	};
}
// Templates for each type of view
navigationService.categoryViewPath = "/:categoryId";
navigationService.areaViewPath = "/:categoryId/:areaId";
navigationService.subAreaViewPath = "/:categoryId/:areaId/:subAreaId";
navigationService.childAreaViewPath = "/:categoryId/:areaId/:subAreaId/:childId";

module.exports = navigationService;