/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {boolean}
 */
class Solution {
    checkEqual(x,y) {
        // code here
        x.sort((a,b)=>a-b)
        y.sort((a,b)=>a-b)
        
        let i=0;
        if(x.length!=y.length){
            return false;
        }
        while(i<x.length){
            if(x[i]!=y[i]){
                return false
            }
            i++;
        }
        return true
    }
}
