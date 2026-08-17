/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s, t) {
    let i = 0;

    for (let j = 0; j < t.length; j++) {
        if (s[i] === t[j]) {
            i++;
        }
    }

    return i === s.length;
}