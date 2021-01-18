/* simpleObjects.js
Jake Levy
*/
//We can require files directly if we know their location
//some files do not need to be made into "modules"
var sim = require("./simpleObject.js");

//Note how the constructor is called based on its imported name
var simpleObject = new sim("Bill");

//Prove that it created a simple Object
console.log(simpleObject.name);


//In JS you can create and add a function to a single instance of an object
//It just adds another K-V pair to the object.  However this time, Value is
//going to be a pointer to a function.
simpleObject.addedProperty = function(){
    //An example of a "Template String", how JS does string interpolation
    console.log(`My name is ${this.name}`);
}

simpleObject.addedProperty();
//simpleObject.sayName();
