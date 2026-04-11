/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

      let prefix = strs[0];
   for(let g=1 ;g<strs.length;g++ ){
     while(!strs[g].startsWith(prefix)){
        prefix=prefix.slice(0,-1)
         if (prefix === "") return "";
     }
   }
   return prefix


    
    
    
};
longestCommonPrefix(["flower","flow","flight"])