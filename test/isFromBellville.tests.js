describe('isFromBellville function' , function(){
    it('should return true if a registration number is for bellville' , function(){
        assert.equal(isFromBellville("CY 1234"),true);
    });
    it('should return false if a registration number is not for bellville' , function(){
        assert.equal(isFromBellville("CZ 2335"),false);
    });
});