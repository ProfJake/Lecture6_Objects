/*simpleObjects.js
A file that demonstrates ES5 Syntax for constructing and exporting a simple
object from the file.
*/
var simple = function(name){
    this.name = name;

    //uncomment the block below to add sayName() to all object instances
/*    this.sayName = function(){
	console.log(`My name is  ${name}`);
	}*/
}
//exporting this as the "module.exports" makes this the default import
module.exports = simple;


