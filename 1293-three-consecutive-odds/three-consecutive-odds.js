/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    
    let h=[]
    for(let f of arr){
        if(f%2!=0){
           h.push(f)
        }else{
            h=[]
        }
        if(h.length==3){
            console.log(h)
            return true
        }
        
    }
    return false
    
};
threeConsecutiveOdds([2,6,4,1])