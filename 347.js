/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = {};

    for(const n of nums){
        count[n] = (count[n] || 0) + 1;
    }

    const freq = [];
    for(let i = 0; i <= nums.length; i++){
        freq.push([]);
    }

    for(const n in count){
        freq[count[n]].push(parseInt(n));
    }

    const res = [];
    for(let i=freq.length - 1; i>0; i--){
        for(const n of freq[i]){
            res.push(n);
            if(res.length === k){
                return res;
            }
        }
    }
};
