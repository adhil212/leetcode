/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
   let result=0 
    let j=s.split(" ")
    for(let k of j){
        if(k.length >0){
            result++
        }
    }
    return result
};
console.log(countSegments("Hello"));