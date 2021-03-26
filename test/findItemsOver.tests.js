describe('findItemsOver' , function(){
    it('should take a list of object each with a name and qty attribute and also a second parameter which is a threshold for the quantity of items available and return product that have a quantity higher than threshold 25. ' , function(){
        assert.deepEqual(findItemsOver([{name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}],25),
        [{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}])
        });

        it('should take a list of object each with a name and qty attribute and also a second parameter which is a threshold for the quantity of items available and return product that have a quantity higher than threshold 30.' , function(){
            assert.deepEqual(findItemsOver([{name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27}],30),
            [{name : 'pears', qty : 37}])
            });

        it('should take a list of object each with a name and qty attribute and also a second parameter which is a threshold for the quantity of items available and if there is no product that have a quantity higher than threshold, must return an empty array ' , function(){
            assert.deepEqual(findItemsOver([{name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27}],40),
            [])
            });
    });