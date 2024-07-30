/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {};

    for(const s of strs){
        const count = Array(26).fill(0);
        
        for(const c of s){
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        const index = count.join('#');
        if(!hash[index]){
            hash[index] = [];
        }

        hash[index].push(s);
    }

    return Object.values(hash);

};
