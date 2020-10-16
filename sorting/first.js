// function numberCompare(num1, num2)
// {
//     return num1 - num2;
// }

// console.log([5,2,3,1,9,4].sort(numberCompare));

function swap(arr,idx1,idx2)
{
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}


// First Quiz write the code for bubbleSort, selectionSort, and insertionSort
function bubbleSort(arr)
{
    for(var i = 0; i < arr.length;i++)
    {
        for(var j = 0; j < arr.length; j++)
        {
            if(arr[j] > arr[j+1])
              swap(arr,j,j+1);
        }
    }
    return arr;
}

function selectionSort(arr)
{
    for(var i = 0; i < arr.length;i++){
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

function insertionSort(arr)
{
    for(var i = 0; i < arr.length;i++)
    {
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


var arr = [6,4,1,5,3,2];
console.log("The BubbleSort: " + bubbleSort(arr));
console.log("The selectionSort: " + selectionSort(arr));
console.log("The insertionSort: " + insertionSort(arr));