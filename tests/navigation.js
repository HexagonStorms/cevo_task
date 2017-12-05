describe("Navigation Service", function() {
    var NavigationService;
    
    beforeEach(angular.mock.module('mockApp'));
    beforeEach(inject(function(_NavigationService_) {
        NavigationService = _NavigationService_;
    }));
    
    // beforeEach(angular.mock.inject( function(_$rootScope_, _$location_) {
    //    _$location_.path('/');
    //    _$rootScope_.$digest();
    // }));
    // beforeEach(module('cevoApp'));
    
    it('Exists', function() {
        expect(NavigationService).toBeDefined();
    });
});