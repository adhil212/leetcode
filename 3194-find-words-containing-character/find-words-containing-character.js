/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result=[]
    for(let j=0;j<words.length;j++){
      if(words[j].includes(x)){
          result.push(j)
      }
    }
    return result
};

findWordsContaining(["abc","bcd","aaaa","cbc"],"x");