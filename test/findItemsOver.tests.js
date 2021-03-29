describe('findItemsOver' , function(){
    it('should return product that have a quantity higher than threshold 25. ' , function(){
        assert.deepEqual(findItemsOver([{name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}],25),
        [{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}])
        });

        it('should return product that have a quantity higher than threshold 30.' , function(){
            assert.deepEqual(findItemsOver([{name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27}],30),
            [{name : 'pears', qty : 37}])
            });

        it('should return an empty array ' , function(){
            assert.deepEqual(findItemsOver([{name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27}],40),
            [])
            });
    });