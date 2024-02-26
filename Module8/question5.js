// 5. What will be printed to the console?

const testAsyncFunction = () =>{
return new Promise((resolve, reject) =>{
if (Math.random() > 0.5) {
resolve('Test Resolve');
} else {
reject('Test Reject');
}
}).catch((err) =>{
console.log('Error caught in testAsyncFunction', err);
throw new Error('Forced error');
});
};
testAsyncFunction()
.then((res) =>{
console.log('Response in then block: ', res);
})
.catch((err) => console.log('Error in catch block: ', err));

// The output will  "Response in then block:  Test Resolve" when the promise is resolved and the output will be "Error caught in testAsyncFunction Test Reject Error in catch block:  Error: Forced error at /home/sandhya/Des top/JS/Module8/Assignment.js:63:7 " when the promise is rejected .

