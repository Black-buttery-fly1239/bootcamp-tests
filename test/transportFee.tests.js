describe('transportFee' , function(){
    it('should return the right price based on the shift you are working on, if it the morning shift should return R20 ' , function(){
        assert.equal(transportFee('morning'), 'R20');

    });

    it('should return the right price based on the shift you are working on, if it the afternoon shift should return R10 ' , function(){
        assert.equal(transportFee('afternoon'), 'R10');

    });

    it('should return the right price based on the shift you are working on, if it a night shift return free ' , function(){
        assert.equal(transportFee('night'), 'free');

    });
    });