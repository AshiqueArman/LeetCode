/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

        const dupHash = new Set();

        for (const num of nums){
            if(dupHash.has(num)) return true;

            dupHash.add(num);
        }    

        return false;
};
