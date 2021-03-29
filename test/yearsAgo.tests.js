describe('yearsAgo function' , function(){
    it('should take in year and return how many years that year is from the current year ' , function(){
        assert.equal(yearsAgo(2012), 9);
    });

    it('should take in the current year and return what year that was many years Ago' , function(){
        assert.equal(yearsAgo(1996), 25)
    });
});