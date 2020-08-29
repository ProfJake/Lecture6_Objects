/* simpleObjects.js
Jake Levy
*/
//We can require files directly if we know their location
//some files do not need to be made into "modules"
var sim = require("./prototype.js");
var com = require("./childType.js");

//Note how the constructor is called based on its imported name
var simpleObject = new sim("Bill");

var compObject = new com("Bill");
//Prove that it created a simple Object
console.log(simpleObject.name);

//Call the function defined in the prototype
simpleObject.addedFunction();
compObject.addedFunction();
