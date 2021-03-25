describe('countRegNumber function' , function(){
    it('should return the number of registration numbers in th string which is 3' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3)
    }); 

    it('should return the number of registration numbers in th string which is 4' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328,CA 42665'),4)
    }); 
});    