function binarySearch(arr,num)
{
    //create a left pointer at the start of the array and a right pointer at the end of the array
    let left = 0;
    let right = arr.length - 1;
    //while the left pointer comes before the right pointer
    while(left <= right)
    {
         //create a pointer in the middle
        let middle = Math.floor((left + right)/2);
         //if you find the value you want, return the index
        if(arr[middle] === num)
           return middle; 
         //if the value is too small, move the left pointer up
        else if(arr[middle] < num)
            left = middle + 1;
         //if the value is too large, move the right pointer down
        else 
            right = middle - 1;
    }     
    //if you never find the value, return -1   
    return -1;  
}

function binarySearchRecursion(arr,left,right,n)
{
    if(right < left) return false;
    let middle = Math.floor((left + right)/2);
    if(arr[middle] === n)
      return middle;
    else if(arr[middle] < n)
       return binarySearchRecursion(arr,middle+1,right,n)
    else 
       return binarySearchRecursion(arr,left,middle-1,n);     
}

let arr = [1,2,3,4,5,6,7,8,9];
let x = 7;
//console.log(binarySearch(arr,x));
console.log(binarySearchRecursion(arr,0,8,x));