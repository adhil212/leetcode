/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let fresult=0
     let sresult=0
    for (let j of nums){
        fresult+=j
    }
    nums.join("").split("").map((v)=>  sresult+=Number(v))
    return fresult-sresult
};
differenceOfSum([1,15,6,3]);