/**
 * @param {number[]} arr
 * @return {number[]}
 */
 console.log()
var arrayRankTransform = function(arr) {
    let sorted = [...arr].sort((a, b) => a - b);
    console.log(sorted)
    

    let rank = new Map();
 
    let count = 1;

    for (let num of sorted) {
        if (!rank.has(num)) {
            rank.set(num, count);
            
            count++;
        }
    }

    return arr.map(num => rank.get(num));
};

console.log(arrayRankTransform([40,10,20,30]));
