public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        
        Dictionary<int, int> hashTable = new Dictionary<int, int>(); 
        
        for(int i=0; i<nums.Length; i++){
            
            int difference = target - nums[i];
            
            if(hashTable.ContainsKey(difference)){
                return new int[]{hashTable[difference], i};
            }
            if(!hashTable.ContainsKey(difference)){
                hashTable.TryAdd(nums[i], i);
            }
        }
        
        return new int[]{0, 0};
    }
}
