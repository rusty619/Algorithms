function swap(arr, num1,num2)
{
   var temp = arr[num1];
   arr[num1] = arr[num2];
   arr[num2] = temp;
}


function selectionSort(arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        var lowest = i;
        for(var j = i+1; j < arr.length;j++)
        {
            if(arr[j] < arr[lowest])
            {
                lowest = j;
            }
        }
        swap(arr,i,lowest);
    }
    return arr;
}

console.log(selectionSort([34,22,10,19,17,1]));