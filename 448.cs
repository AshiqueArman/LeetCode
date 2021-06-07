public class Solution {
    public IList<int> FindDisappearedNumbers(int[] nums) {
        
        HashSet<int> NumbersList = new HashSet<int>();
        List<int> DisappearedNumbers = new List<int>();
        
        for(int i = 0; i<nums.Length; i++){
            NumbersList.Add(nums[i]);
        }
        for(int i = 1; i<=nums.Length; i++){
            if(!NumbersList.Contains(i)){
                DisappearedNumbers.Add(i);
            }
        }
        return DisappearedNumbers;
    }
}
