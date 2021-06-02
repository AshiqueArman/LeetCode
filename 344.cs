public class Solution {
    public void ReverseString(char[] s) {
        int x = s.Length;
        char temp;
        
        for(int i=0; i<x/2; i++){
            temp = s[i];
            s[i] = s[x-i-1];
            s[x-i-1] = temp;
        }
    }
}
