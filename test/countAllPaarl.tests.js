describe('countAllPaarl function' , function(){
    it('should return the number of registration numbers in string for paarl' , function(){
        assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'),3)
    }); 

    it('should return the number of registrations that are not for paarl CJ' , function(){
        assert.equal(countAllPaarl('CJ 2345, CL 123-546, CK 345, CJ 123'),2)
    }); 

    it('should check if there is any Paarl CJ registration numbers and if not, should return 0 ' , function(){
        assert.equal(countAllPaarl('CL 2345, CL 123-546, CK 345, CL 123'),0)
    }); 
});