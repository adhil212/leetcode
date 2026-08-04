/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let arr=[]
    let w1=word1.split("")
    let w2=word2.split("")
    let count=null
    if(w1.length>w2.length){
        count=w1
    }else{
       count=w2 
    }
    console.log(count)
    for (let j=0;j<count.length;j++){
        arr.push(w1[j])
        arr.push(w2[j])
    }
    
    return arr.join("")
    
};
console.log(mergeAlternately("ab","pqrs"))