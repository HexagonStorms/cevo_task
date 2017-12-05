describe("Navigation Service", function() {
    var NavigationService;
    
    beforeEach(angular.mock.module('mockApp'));
    beforeEach(inject(function(_NavigationService_) {
        NavigationService = _NavigationService_;
    }));
    
    it('Exists', function() {
        expect(NavigationService).toBeDefined();
    });
});