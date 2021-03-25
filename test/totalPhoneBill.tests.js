describe('totalPhoneBill' , function(){
    it('should calculate the total bill for data provided from the calls made and the sms sent and return R6.15' , function(){
        var str = "call, sms, call, sms,call"
        assert.equal(totalPhoneBill(str), 'R6.15');

        // assert.deepEqual([2,2],[2,2]);
    });

    it('should calculate the total bill for data provided from empty string must return R0.00' , function(){
        var str = ""
        assert.equal(totalPhoneBill(str), 'R0.00');

})
})