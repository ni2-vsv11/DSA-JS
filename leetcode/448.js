/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let arr = [];
    let i = 0;
    while(i<nums.length){
        let cIdx = nums[i]-1;
        if(nums[i] != nums[cIdx]) {
            let temp = nums[i];
            nums[i] = nums[cIdx];
            nums[cIdx] = temp;
        } else i++;
    }
    for(let j=0; j<nums.length; j++){
        if(j+1 != nums[j]){
            arr.push(j+1);
        }
    }
    return arr;
};