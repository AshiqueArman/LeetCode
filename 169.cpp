class Solution {
public:
    int majorityElement(vector<int>& nums) {
        
    int a=0;
        int count=0;
        
        for(int i=0; i<nums.size(); i++)
        {
            if(count == 0) a=i;
            if(nums[i]==nums[a]) count++;
            else count--;
            
        }
        return nums[a];
        
    }
};
