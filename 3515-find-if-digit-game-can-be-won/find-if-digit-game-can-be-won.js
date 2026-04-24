/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let single=0
    let double=0
    nums.map((v)=>{
        if(String(v).length==1){
            single+=v
        }else{
          double+=v  
        }
    })
     if(single==double){
        return false
    }else{
       return  true
    }
    
};
canAliceWin([1,2,3,4,10]);