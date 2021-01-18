/* simpleObjects.js
Jake Levy
*/
//We can require files directly if we know their location
//some files do not need to be made into "modules"
var sim = require("./class.js");

//Note how the constructor is called based on its imported name
var simpleObject = new sim("Bill");

//Prove that it created a simple Object
console.log(simpleObject.name);

//Call the function defined in the prototype
simpleObject.addedFunction();
