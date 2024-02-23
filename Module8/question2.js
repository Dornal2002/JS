// 2.  Using promises - Write a function that fetches data from an API endpoint (GET https://reqres.in/api/users). Log the data into the console once it is received

let p=fetch("https://reqres.in/api/users")
p.then((response)=>{
    // console.log(response.status)
    // console.log(response.ok);
    console.log(response.headers);
    return response.json()
}).then((response)=>{
    console.log(response)
})