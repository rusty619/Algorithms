function swap(arr, num1,num2)
{
   var temp = arr[num1];
   arr[num1] = arr[num2];
   arr[num2] = temp;
}

function bubbleSort(arr)
{
    for(var i = 0; i < arr.length;i++)
    {
        for(var j = 0; j < (arr.length-i-1);j++)
        {
            if(arr[j] > arr[j+1])
            {
                swap(arr,j,j+1);
            }
        }
    }
    return arr;
}


function bs(arr)
{
   for(var i = 0; i < arr.length;i++)
   {
       for(var j = 0; j < arr.length;j++)
       {
           if(arr[j] > arr[j+1])
              swap(arr,j,j+1);
       }
   }
   return arr;
}

function selectionsort(arr)
{
   for(var i = 0; i < arr.length;i++)
   {
       min = i;
       for(var j = i+1; j < arr.length; j++)
       {
           if(arr[j] < arr[min])
              min = j;
       }
       swap(arr,i,min);
   }
   return arr;
}

var arr = [3,2,6,5,1,4];
console.log(bubbleSort(arr));
console.log("The New Bubble Sort: " + bs(arr));
console.log("The selection Sort: " + selectionsort(arr));
