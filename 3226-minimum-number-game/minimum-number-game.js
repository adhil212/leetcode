/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
   nums.sort((a,b)=>a-b)
   
   let arr=[]
   
   for(let j=0;j<nums.length;j+=2){
       arr.push(nums[j+1])
       arr.push(nums[j])
   }
   
   return arr
};
console.log(numberGame([5,4,2,3]));