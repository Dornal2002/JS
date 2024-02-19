function test(callback){
    callback();
   }
   
   function callbackFunc(){
    console.log("Calling the callback function")
    return 5;
   }

test(callbackFunc)


test(callbackFunc())

test(() => callbackFunc())

/*

What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break? Do statements after the loop run? What is the return value? Can we pass a return value from within a loop? Can you return from inside an if block? What impact does that have?
1.Using return inside a loop:
When you use return inside a loop, it will immediately exit the loop and the function.
Any statements after the loop will not be executed.
The return value will be whatever value is provided with the return statement.

2.Using return inside a switch case block:
Similarly, using return inside a switch case block will exit the switch block and the function.
Statements after the switch case block will not be executed.

3.Returning a value from within a loop:
Yes, you can return a value from within a loop. As shown in the examples above, using return inside a loop will exit the loop and the function, returning the specified value.

4.Returning from inside an if block:
Yes, you can return from inside an if block. Similar to loops and switch cases, using return inside an if block will exit the function at that point.
Statements after the if block will not be executed.

In summary, using return inside loops, switch case blocks, or if blocks will exit the function immediately, skipping any subsequent statements, and return the specified value.


// What happens when you return callback() from the test function?
Here, callbackFunc() is executed first because of the parentheses.
It will print "Calling the callback function" to the console.
The return value of callbackFunc() is 5.
Then, test is called with the result of callbackFunc(), which is 5.
Inside test, callback() will try to execute 5 as a function, resulting in an error since 5 is not a function.
test(() => callbackFunc()):

// What happens when you return callback from the test function?
test(() => callbackFunc()):

This time, an arrow function is passed to test, which when executed, will return the result of callbackFunc().
Inside test, callback() will execute the arrow function, resulting in callbackFunc() being called.
It will print "Calling the callback function" to the console.
No return value is explicitly provided inside the arrow function, so undefined is returned.
*/