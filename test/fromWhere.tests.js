describe('fromWhere' , function(){
    it('should return the town the car is from, if the reg number starts with CY, return Bellville ' , function(){
        assert.equal(fromWhere("CY 2965"), "Bellville");

    });

    it('should return the town the car is from, if the reg number starts with CJ, return Paarl ' , function(){
        assert.equal(fromWhere("CJ 5643"), "Paarl");

    });

    it('should return the town the car is from, if the reg number starts with CA, return Paarl ' , function(){
        assert.equal(fromWhere("CA 7654"), "Cape Town");

    });

    it('should return the town the car is from, if the reg number is default or does not match any of these places given, return some other place! ' , function(){
        assert.equal(fromWhere("CY 890"), "Some other place!");

    });
});