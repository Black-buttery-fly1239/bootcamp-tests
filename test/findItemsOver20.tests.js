describe('findItemsOver20' , function(){
    it('should take a list of object that have 2 attributes one called name and the other qty and return all the product that have a quantity higher than 20 ' , function(){
    assert.deepEqual(findItemsOver20([{name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}]), [{name : 'pears', qty : 37},
    {name : 'bananas', qty : 27}])

    });

    it('should take a list of object that have 2 attributes one called name and the other qty and  check if the is any quantity higher than 20, if there is nothing must return an empty array ' , function(){
        assert.deepEqual(findItemsOver20([{name : 'apples', qty : 10},
        // {name : 'pears', qty : 37},
        // {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3}]), [])
    
        });

});