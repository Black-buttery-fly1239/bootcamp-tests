describe('regCheck function' , function(){
    it('should check if a registration number endsWith GP, L, EC, MP return true' , function(){
        assert.equal(regCheck("DV 23 NB GP", 'GP'),true);
    }); 
    
    it('should check if the registration number endswith GP, L, EC, MP return true' , function(){
         assert.equal(regCheck("DV 24 LP MP", 'MP'),true);
     });

     it('should check if the registration number endswith GP, L, EC, MP return true' , function(){
        assert.equal(regCheck("DV 25 LP L", 'L'),true);
    });

    it('should check if the registration number endswith GP, L, EC, MP return true' , function(){
        assert.equal(regCheck("DV 26 LP EC", 'EC'),true);
    });



     it('should check if the registration number doesnot endswith GP, L, EC, MP return false' , function(){
        assert.equal(regCheck("'CY189-012', 'CY'"),false);
    });

    it('should check if the registration number doesnot endswith GP, L, EC, MP return false' , function(){
        assert.equal(regCheck("CY189-012', 'ND'"),false);
    });

});
    