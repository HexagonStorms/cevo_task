function navigationService($location) {
    console.log('in here');
    this.locationService = $location;
}

// Find which view is requested, load appropriate template/data
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
navigationService.$inject = ["$location"];

module.exports = navigationService;