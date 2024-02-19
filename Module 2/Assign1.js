let a
console.log(a)
a=10
console.log(a)

// const b
// console.log(b) //It gives an error  Missing initializer in const declaration
// b="sandhya"
// console.log(b)


let test=1
console.log(typeof test)  //result is number
test="name"
console.log(typeof test) // result in string
test=false
console.log(typeof test) //result is boolean 
test=4.5
console.log(typeof test) //result is number

test=[]
console.log(typeof test) // result is object
test=null
console.log(typeof test) //result is object
test=NaN
console.log(typeof test) // result is number

// How can you find if a variable is an array or NaN besides typeof?
//We can use the method called isNan(test) to check a variable is nan or array

console.log(isNaN(test))

//Using let 
let arr=[1,"Assign-2",true]
console.log(arr)

//Adding element in the array
arr.push(10)
console.log(arr)

//deleting element in the array
arr.pop()
console.log(arr)

//modigying the array values
arr[2]=false;
console.log(arr)

//Using let
let obj={
    id:1,
    name:"Sandhya",
    email:"abc@gmail.com"
}
console.log(obj)

//Adding element in the object
obj.address="Pune"
console.log(obj)
console.log(Object.keys(obj))
console.log(Object.values(obj))

//modifying the the values in the object
obj.name="robot"
console.log(obj)

//deleting the keys in the objects
delete obj.id
console.log(obj)

//Using const
const arr1=[1,true,10.5,"San"]
console.log(arr1)

//Adding element in the array
arr1.push(5)
console.log(arr1)

//deleting element in the array
arr1.pop()
console.log(arr1)

//modigying the array values
arr1[0]=5
console.log(arr1)

const obj1={
    id:101,
    name:"Jam",
    email:"abc@gmail.com",
    address:"Solapur"
}
console.log(obj1)
console.log(Object.keys(obj))
console.log(Object.values(obj))

//Adding the elements in the object
obj1.age=18
console.log(obj1)

obj.name="Sam"
console.log(obj)

//deleting the keys in the objects
delete obj.name
console.log(obj)

// Use let and const to create arrays and objects. Try modifying, deleting properties within the array or object. What do you expect to happen in both cases? What actually happens in both cases. What is the difference between an object declared as a let or a const variable?
// let allows you to reassign the variable to a new value, while const does not. However, when it comes to objects and arrays, const only prevents reassignment of the variable, not modification of the object or array itself.

