// User function Template for javascript
class Solution {
    /**
    * @param number date
    * @param number[] car
    * @param number[] fine

    * @returns string[]
    */
    totalFine(date, car, fine) {
        // code here
        let n=car.length;
        let total=0;
        for(let i=0;i<n;i++){
            if(date %2==0 && car[i]%2!=0){
                total+=fine[i]
            }
            else if(date%2!=0 && car[i]%2==0){
                total+=fine[i]
            }
        }
        return total;
    }
}