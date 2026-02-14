/**
 * @param {number[]} a
 * @returns {number[]}
 */
class Solution {
    leaders(nums) {
        // code here
        let n=nums.length;
        let leader=nums[n-1];
        let LeaderArray=[]
        LeaderArray.push(nums[n-1])
        for(let i=n-2;i>=0;i--){
            if(nums[i]>=leader){
                LeaderArray.push(nums[i]);
                leader=nums[i]
            }
        }
        LeaderArray.sort((a,b)=>b-a)
        return LeaderArray
    }
}