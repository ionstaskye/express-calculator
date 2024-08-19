const {findMean, makeNumberArray, findMedian, findMode} = require('./functions')

test('should find mean', function(){
    let mean = findMean([1,2,3,4,5])
    expect(mean).toEqual(2)
})

test('should find mode', function(){
    let mean = findMode([1,1,2,3,4,5])
    expect(mean).toEqual(1)    
})

test('should find median', function(){
    let mean = findMedian([1,2,3,4,5])
    expect(mean).toEqual(3)
})

test("should turn an array of numbers as strings into an array of numbers"
, function(){
    let array = makeNumberArray["1","2","3","4","5"]
    expect(array) = [1,2,3,4,5]
})