/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     r=String(x).split('').join('')
    f=[...r].reverse().join('')
    return r.includes(f)
};
isPalindrome(121)