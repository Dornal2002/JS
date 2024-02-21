let fruits=["apple","banana","mango","grapes","apple","banana"]

const result=fruits.filter((item,i,fruits)=>i==fruits.indexOf(item))
console.log(result)