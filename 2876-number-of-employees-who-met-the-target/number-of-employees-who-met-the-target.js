/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let result=0
    let j=hours.map((v)=>{
        if(v>=target){
            result++
        }
    })
    return result
    
};
numberOfEmployeesWhoMetTarget([5,1,4,2,2],6);