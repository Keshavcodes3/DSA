/**
 * @param {number[]} arr
 * @param {number} x
 * @return {number}
 */
class Solution {
    search(arr, x) {
        // code here
        let ans=-1;
        for(let i=0;i<arr.length;i++){
            if(arr[i]==x){
                ans=i;
                break;
            }
        }
        return ans;
    }
}
