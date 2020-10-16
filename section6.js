// function BinarySearch(arr,num)
// {
//     let left = 0;
//     let right = arr.length - 1;
//     while(left <= right)
//     {
//         let middle = Math.floor((left + right)/2);
//         if(arr[middle] === num)
//            return true;
//            else if(arr[middle] < num)
//                   left = middle + 1;
//                 else if(arr[middle] > num)
//                      right = middle - 1;  
//     }
//     return false;
// }

//function binarySearchRecursion(arr,left,right,num)
// {
//     if(left > right)
//         return false;
//     let middle = Math.floor((left+right)/2); 
//     if(arr[middle] === num)
//        return true;
//     else if(arr[middle] < num)
//        return binarySearchRecursion(arr,middle+1,right,num);
//     else if(arr[middle] > num)
//        return binarySearchRecursion(arr,left,middle-1,num)      
// }


// var arr = [1,2,3,4,5,6,7];
// console.log(BinarySearch(arr,1));

// function areThereDuplicates()
// {
//     let collection = {};
//     for(let val in arguments)
//        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
//     for(let key in collection)
//     {
//         if(collection[key] > 1)
//            return true;
//     }
//     return false;
    
// }

// function sameFrequency(x1,x2)
// {
//    let x1String = x1.toString();
//    let x2String = x2.toString();
//    let count1 = {};
//    let count2 = {};
//    if(x1String.length !== x2String.length) return false;
//    for(let i = 0; i < x1String.length; i++)
//       count1[x1String[i]] = (count1[x1String[i]] || 0) + 1;
//    for(let j = 0; j < x1String.length; j++)
//       count2[x2String[j]] = (count2[x2String[j]] || 0) + 1;   
//    for(let keys in count1)
//     {
//         if(count1[keys] !== count2[keys])
//            return false;
//     }  
//     return true;
// }

// console.log(sameFrequency(124,534));

// function averagePair(arr, num)
// {
//     let start = 0;
//     let end = arr.length-1;
//     while(start < end)
//     {
//         let avg = (arr[start] + arr[end]) / 2;
//         if(avg === num)
//           return true;
//               else if(avg < num)
//                      start++;
//                     else
//                       end--; 
//     }
//     return false;
// }

function isSubsequence(str1,str2)
{
    var i = 0;
    var j = 0;
    if(!str1) return true;
    while(j < str2.length)
    {
        if(str2[j] === str1[i])
           i++;
        if(i === str1.length)
           return true;
        j++   
    }
    return false;
}

console.log(isSubsequence("abc","acb"));

