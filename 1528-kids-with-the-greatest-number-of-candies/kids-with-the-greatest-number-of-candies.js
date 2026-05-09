/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let l=Math.max(...candies)
    let f=candies.map((v)=>{
        if(v+extraCandies>=l){
            return true
        }else{
            return false 
        }
    })
    return f
    
};

kidsWithCandies([4,2,1,1,2],1);