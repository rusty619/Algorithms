function charCount(str){
    //make object to return at end
    var result = {};
    //loop over string, for each character....
    for(let i = 0; i< str.length;i++){
        var char = str[i].toLowerCase();
        //if the char is a number/letter AND is a key in object, add one to count
        if(result[char] > 0){
            result[char]++;
        } 
         //if thr char is a number/letter AND not in object, add it and set value to 1
        else {
            result[char] = 1;
        }
    }
       
      
       //if character is something else(space, period, etc.) do nothing
    //return object at end
    return result;
}


function countChar(str)
{
    var obj = {};
    for(var char of str){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test) {
           obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function myCharCount(str)
{
    var result = {};
    for(var i = 0; i < str.length; i++)
    {
        if(result[str[i]] > 0)
           result[str[i]]++;
           else
             result[str[i]] = 1;
    }
    return result;
}


console.log(myCharCount("Hello World"))