const person={
    name:"Harry Potter",
    age: 12,
    address: {
     details: [4, "Privet Drive"],
     area:"Little Whinging",
     city: "Surrey",
     state: "England"
    } 
   }


//    1.How will you create a new copy of the object below while updating the value of address.details[0] to “5“?
let object=JSON.parse(JSON.stringify(person))
object.address.details[0]=5
   console.log(object)
   console.log(person);

//    2. Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries.

let obj = {
   a:"Apple",
   b:["Basketball","Baseball"],
   c: {
    call: "cellphone"
   },
   d: "Dog"
  }

function filterObj(obj){
   let obj1={};
   let entries=Object.entries(obj)
   for(let i=0;i<entries.length;i++){
      if(typeof entries[i][1]!="object")
      {
         obj1[entries[i][0]]=entries[i][1]
      }
   }
   return obj1
}

console.log(filterObj(obj));