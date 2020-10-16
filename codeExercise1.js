//Given two strings. write a function to determine if the second string is an anagram of the first
// ex: cinema formed from iceman
function validAnagram(str1,str2)
{
    //make sure the length of both strings are the same
    if(str1.length !== str2.length)
    return false;
    //creat two frequencyCounters that counts each character
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let i = 0; i < str1.length; i++)
    {
        if(/[a-z0-9]/.test)
        {
            frequencyCounter1[str1[i]] = ++frequencyCounter1[str1[i]] || 1;
            frequencyCounter2[str2[i]] = ++frequencyCounter2[str2[i]] || 1;
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    //check if both frequencyCounters have the same amount of values of chars
    for(val in frequencyCounter1)
    {
        if(frequencyCounter1[val] !== frequencyCounter2[val])
          return false;
    }
    //return True if all cases are true
    return true;
}

//Colt steele's solution
function validAnagram2(first,second){
    if(first.length !== second.length)
       return false;
    const lookup = {};
    for(let i = 0; i < first.length;i++)
    {
        let letter = first[i];
        //if letter exiata, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for(let i = 0; i < second.length; i++)
    {
        let letter = second[i];
        //can't find letter or letter is zerp then it's not an anagram
        if(!lookup[letter])
          return false;
        else
           lookup[letter] -= 1;
    }
    return true;
}


// sumZero challenge
function sumZero(arr)
{
    //declare two variables that will represent the first index and the last index of the array
    var left = 0;
    var right = arr.length-1;
    //loop through array to find if there is a sum of two indexs that is zero until left index is greater than right
    while(left < right)
    {
        let sum = arr[left] + arr[right];
        //return the two index if the sum can equal to zero
        if(sum === 0)
          return[arr[left],arr[right]];
        else if(sum > 0)
          right--;
        else
          left++;    
    }
}


function validAnagram3(str1, str2)
{
   // check if both string has the same size
   if(str1.length !== str2.length)
      return false;
   // declare two variables that will check amount of unique characters in each both strings
   var charCounter1 = {};
   var charCounter2 = {};
   for(var i = 0; i < str1.length;i++)
   {
      if(/[]a-z0-9]/.test)
      {
        charCounter1[str1[i]] = ++charCounter1[str1[i]] || 1;
        charCounter2[str2[i]] = ++charCounter2[str2[i]] || 1;
      }
   }
   // check if both  are anagram
   for(var val in charCounter1)
   {
      if(charCounter1[val] !== charCounter2[val])
        return false;
   }
   // return true if all cases meet
   return true;
}



str1 = "silent";
str2 = "listen";
 console.log(validAnagram3(str1,str2));

// var arr =[-3,-2,-1,0,1,3,4];
// console.log(sumZero(arr));