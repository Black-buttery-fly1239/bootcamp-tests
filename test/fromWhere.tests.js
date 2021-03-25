describe('fromWhere' , function(){
    it('should return the town the car is from, if the reg number starts with CY, return Bellville ' , function(){
        assert.equal(fromWhere("CY"), "Bellville");

    });

    it('should return the town the car is from, if the reg number starts with CJ, return Paarl ' , function(){
        assert.equal(fromWhere("CJ"), "Paarl");

    });

    it('should return the town the car is from, if the reg number starts with CA, return Paarl ' , function(){
        assert.equal(fromWhere("CA"), "Cape Town");

    });

    it('should return the town the car is from, if the reg number starts with default, return some other place! ' , function(){
        assert.equal(fromWhere("default"), "Some other place!");

    });
});