/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    majorityElement(arr) {
        let candidate = null;
        let count = 0;
        
        // Step 1: Find candidate
        for (let num of arr) {
            if (count === 0) {
                candidate = num;
            }
            
            count += (num === candidate) ? 1 : -1;
        }
        
        // Step 2: Verify candidate (important if majority not guaranteed)
        count = 0;
        for (let num of arr) {
            if (num === candidate) {
                count++;
            }
        }
        
        return count > Math.floor(arr.length / 2) ? candidate : -1;
    }
}
