function swap(arr,x,y)
{
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function pivot(arr,start = 0, end = arr.length+1)
{
    let pivot = arr[start];
    let swapIdx = start;
    for(var i = start + 1; i < arr.length; i++)
    {
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i);
        }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length-1)
{
    if(left < right)
    {
        let pivotIndex = pivot(arr,left,right);
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}

var arr = [6,4,3,8,2,1,7,9];
console.log(quickSort(arr));