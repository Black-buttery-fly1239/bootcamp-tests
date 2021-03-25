describe('isWeekday function' , function(){
    it('should find out if the parameter passed in is a day of the week.If it not, must return false' , function(){
        assert.equal(isWeekday('Saturday'), false);
    });

    it('should find out if the parameter passed in is a day of the week.if it is, must return true' , function(){
        assert.equal(isWeekday('Monday'), true)
    });
});