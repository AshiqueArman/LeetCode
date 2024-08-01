class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for(let s of strs){
            res += `${s.length}#${s}`;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while(i<str.length){
            let j = i;
            while(str[j] !== '#'){
                j++;
            }
            let length = parseInt(str.substring(i, j), 10);
            res.push(str.substring(j + 1, j + 1 + length));
            i = j + 1 + length;
        }
    return res;
    }
}
