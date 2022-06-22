//find minimum and maximum sum of array with 5 elements
let input = [5,2,3,4,1]
function miniMaxSum(arr){
    
    arr = arr.sort();
    let maxArr = arr.slice(1);
    let minArr = arr.slice(0,-1);

    console.log(minArr,maxArr);

    const sum = arr.reduce((a, total) => a + total, 0);
    console.log(sum - arr[arr.length - 1], sum - arr[0]);
}

miniMaxSum(input)
//returns two sums