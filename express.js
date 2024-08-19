const express = require('express')

const app = express()

const {findMean, makeNumberArray, findMedian, findMode} = require('./functions')

const {ExpressError} = require('./expressError')
app.get('/mean',function(req, res){
    
    let numbers = req.query.nums.split(",")
    let nums = makeNumberArray(numbers)
    if (nums instanceof Error){
        throw new ExpressError(nums.message)
    }
    
    let result = {
        operation: 'mean',
        result: findMean(nums)
    }
    return res.send(result)
})

app.get('/median', function (req,res){

    let numbers = req.query.nums.split(",")
    let nums = makeNumberArray(numbers)

    let result = {
        operation: 'median',
        result: findMedian(nums)
    }

    return res.send(result)
})

app.get('/mode', function (req,res){

    let numbers = req.query.nums.split(",")
    let nums = makeNumberArray(numbers)

    let result = {
        operation: 'mode',
        result: findMode(nums)
    }

    return res.send(result)
})



app.listen(3000, () =>{
    console.log("Server Running")
})