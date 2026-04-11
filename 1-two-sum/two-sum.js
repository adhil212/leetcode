/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let map={}
   for(let i=0;i<nums.length;i++){
    let res=target-nums[i]
    if(map[res] !==undefined){
        return[map[res],i]
    }
    map[nums[i]]=i
   }
};
console.log(twoSum([2,7,11,15],9))