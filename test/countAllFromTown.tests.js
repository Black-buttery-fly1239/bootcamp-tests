describe('countAllFromTown function' , function(){
    it('should return all number of registration numbers in the string that is for Stellies town' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3);
    });

    it('should return all number of registration numbers in the string that is for other towns' , function(){
        assert.equal(countAllFromTown('CY 567,CL 345, CJ 456,CL 341','CL'), 2);
    });
});