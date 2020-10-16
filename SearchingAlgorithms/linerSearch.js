function linearSearch(arr, n)
{
   var t = true;
   var m = 0;
   //loop through the array & check if the current array element equals to the value
   for(let i = 0; i < arr.length; i++)
   {
       if(arr[i] === n)
       {
           t = true;
           m = i;
       }
   }
      //if it was found that the value is in the array than return then index of the array element that was found
      if(t === true)
        return m;
      //if the value never was found return -1
      else
        return -1;

}

// function LS(arr,n)
// {
//    for(let i = 0; i < arr.length; i++)
//    {
//        if(arr[i] === n)
//          return i;
//    }
//    return -1;
// }

arr = [1,2,3,4,5,6,7,8,9];
//console.log(linearSearch(arr,4));
//console.log(LS(arr,4));