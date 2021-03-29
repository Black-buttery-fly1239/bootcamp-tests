describe('findItemsOver20' , function(){
    it('should return all the product that have a quantity higher than 20 ' , function(){
    assert.deepEqual(findItemsOver20([{name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}]), [{name : 'pears', qty : 37},
    {name : 'bananas', qty : 27}])

    });

    it('should check if there is any quantity higher than 20, if there is nothing must return an empty array ' , function(){
        assert.deepEqual(findItemsOver20([{name : 'apples', qty : 10},
        {name : 'apples', qty : 3}]), [])
    
        });

});