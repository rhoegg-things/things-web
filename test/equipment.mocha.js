describe('equipmentController', function() {
    beforeEach(function() {
        module('thingsApp');
        module('thingsServices');
    });   

    it('should retrieve equipment and place in scope', 
        inject(function(_$httpBackend_, $rootScope, $controller, Equipment) {
            var scope = $rootScope.$new();

            _$httpBackend_.expectGET('/fake-data.json')
                .respond({
                    types: [
                        {
                            name: "type 1",
                            items: [
                                { name: "type 1 item 1" }
                            ]
                        }
                    ],
                    items: [
                        { name: "item 1" },
                        { name: "item 2" }
                    ]
                });

            var controller = $controller('equipmentController', {$scope: scope}, Equipment);
            
            _$httpBackend_.flush();

            scope.equipment.types.length.should.equal(1);
            scope.equipment.items.length.should.equal(2);
        }));
});