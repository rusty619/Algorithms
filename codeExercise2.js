function countUniqueValues(arr)
{
   // return 0 if the array is empty  
   if(arr.length === 0) return 0;
   // declare a variable that will represent the first index
   var i = 0;
   // loop through the array to count any new unique value
   for(var j = 1; j < arr.length; j++)
   {
       if(arr[i] !== arr[j])
       {
           i++;
           arr[i] = arr[j];
       }
   }
   // return the count value
   return i + 1;
}

arr = [1,1,1,1,1,2];
console.log(countUniqueValues([-1,-1,0,0,0,1,1,2,3,4,4,5,5,6,7,8,9,9]));