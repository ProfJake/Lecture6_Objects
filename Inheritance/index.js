/* simpleObjects.js
Jake Levy
*/
//We can require files directly if we know their location
//some files do not need to be made into "modules"
var sim = require("./class.js");
var com = require("./childType.js");

//Note how the constructor is called based on its imported name
var simpleObject = new sim("Bill");

var compObject = new com("Jake");
//Prove that it created a simple Object
console.log(simpleObject.name);

//Calls the function defined in the parent
simpleObject.addedFunction();

//Calls the function defined in the childtype, which calls the parent function
compObject.addedFunction();
