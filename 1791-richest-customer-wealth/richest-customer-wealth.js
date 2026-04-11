/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let result=0
 for (let j of accounts){
     let k=j.reduce((a,b)=>a+b)
     if(k>result) result=k
 }
 return result
};
maximumWealth([[1,2,3],[3,2,1]]);