// write a method to replace all spaces in a string with "%20"
// var str1 = "Mr John Smith";
// let str2 = str1.replace(/ /g,"%20");
// console.log(str2);

//write a method that rotations a string
// function rotation(str){
//     let start = str[0];
//     let end = str[str.length-1];
//     let newEnd = str.charAt(start);
//     str = str.replace(start,end);
//     str = str.slice(0,str.length-1);
//     str = str.concat('',newEnd)
//     console.log(str); 
// }

// var str = "love";
// console.log(str);
// rotation(str);

function swap(arr,x,y){
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function rotationArray(arr){
    //let start = 0;
    let end = arr.length-1;
    for(var i = 0; i <= end-1; i++){
        swap(arr,end-i-1,end-i);
    }
    return arr;
}

arr = ["L","O","V","E"];
console.log(rotationArray(arr));
