/*simpleObjects.js
A file that demonstrates ES5 Syntax for constructing and exporting a simple
object from the file.
ES6 Version.
*/
class simple{
    constructor(name){
    this.name = name;
    }
}
//exporting this as the "module.exports" makes this the default import
module.exports = simple;


