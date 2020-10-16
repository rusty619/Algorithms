function insertionSort(arr)
{
   for(let i = 1; i < arr.length; i++){
       var key = arr[i];
       var j = i-1;
       while(j >= 0 && key < arr[j])
       {
           arr[j+1] = arr[j];
           j--;
       }
       arr[j+1] = key;
   }
   return arr;
}

var arr = [10,22,1,2,4,6,8,9,34,14]
console.log(insertionSort(arr));