function findMean(nums){
    total = 0
    for (i=0; i<nums.length; i++){
        total += nums[i]
    }
    result = total/(nums.length)
    return result
}

function makeNumberArray(numsArr){
    let nums = []

    for (i=0; i<numsArr.length; i++){
        let num = Number(numsArr[i])
        if (num === NaN){
            return new Error(
                `There is a value ${nusArr[i]} is not a valid number`
            );
            
        }
        nums.push(num)
    }
    return nums
}

function findMedian(nums){
    if (nums.length%2 !== 0){
        let medianPoint= Math.floor(nums.length/2)
        return nums[medianPoint]
    }
    else{
        let medianPoint= Math.floor(nums.length/2)
        return nums[medianPoint-1], nums[medianPoint]
    }
}

function findMode(nums){
    let numberCount = {}
    for (i=0; i<nums.length; i++){
        if (numberCount.hasOwnProperty(nums[i])){
            numberCount[nums[i]] +=1

        }
        else{
            numberCount[nums[i]] = 1

        }
                
}
    let maxValue = Object.entries(numberCount)[0]
    
    for(i=0; i<Object.keys(numberCount).length; i++){
        if(Object.values(numberCount)[i] > maxValue[1]){
            maxValue = Object.entries(numberCount)[i]
            console.log(maxValue)
        }
        
    }
    return maxValue[0]
    
return numberCount
}
module.exports = {
    makeNumberArray,
    findMean,
    findMedian,
    findMode
}