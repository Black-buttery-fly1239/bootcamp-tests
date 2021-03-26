describe('regCheck function' , function(){
    it('should check if a registration number endsWith GP return true' , function(){
        assert.equal(regCheck("DV 23 NB GP", 'GP'),true);
    }); 
    
    it('should check if the registration number endswith MP return true' , function(){
         assert.equal(regCheck("DV 249 LP MP", 'MP'),true);
     });

     it('should check if the registration number endswith L return true' , function(){
        assert.equal(regCheck("DV 258 LP L", 'L'),true);
    });

    it('should check if the registration number endswith EC return true' , function(){
        assert.equal(regCheck("DV 267 LP EC", 'EC'),true);
    });



     it('should check if the registration number endswith CY return false' , function(){
        assert.equal(regCheck("'CY189-012', 'CY'"),false);
    });

    it('should check if the registration number endswith ND return false' , function(){
        assert.equal(regCheck("CY189-012', 'ND'"),false);
    });

});
    