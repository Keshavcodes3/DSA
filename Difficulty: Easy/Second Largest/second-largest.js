class Solution {
    getSecondLargest(arr) {
        // code here
        let f=arr[0];
        let s=-1;
        for(let i=1;i<arr.length;i++){
            if(arr[i]>f){
                s=f;
                f=arr[i];
            }else if(arr[i]>s && arr[i]!=f){
                s=arr[i];
            }
        }
        return s;
    }
}