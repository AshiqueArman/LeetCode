class Solution {
public:
    int majorityElement(vector<int>& nums) {
        
        int a = 0 ;
        
        int c = 0;
        
        for(int i=0; i<nums.size(); i++){
            
            if(c == 0){
                a = i;
            }
            if(nums[i] == nums[a]){
                c++;
            }else{
                c--;
            }
        }
        
        return nums[a];
    }
};
