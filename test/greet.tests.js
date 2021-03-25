describe('greet function' , function(){
    it('should greet Zoe' , function(){
        assert.equal(greet("Zoe"),"Hello, Zoe");
    });

    it('should greet Cario' , function(){
        assert.equal(greet("Cario"),"Hello, Cario");
    });

    it('should greet Mabutho' , function(){
        assert.equal(greet("Mabutho"),"Hello, Mabutho");
    });


});