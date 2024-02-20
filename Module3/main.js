let age=25

//Using if else 
if(age<=12){
    console.log("child")
}else if(age>=13 && age<=18){
    console.log("teen")
}else{
    console.log("adult")
}

//Using Switch
age=11
switch(true)
{
    case age<=12:console.log("child")
        break
    case (age>=13 && age<=18):console.log("teen")
        break
    default:console.log("adult")
}

//Using For loop
let arr=new Array(25)

for(var i=0;i<arr.length;i++)
{
    arr[i]=i+1;
}
console.log(arr)

// Using while loop
let arr1=new Array(25)
i=0
while(i<25)
{
arr1[i]=i+1;
i++;
}
console.log(arr1)

// Can you use return instead of break in loops?
// Yes we can use return statement instead of break statement .Break is optional and is used to prevent "falling" through all the other case statements. So return can be used in a similar fashion, as return ends the function execution.
