/*
childType.js
Jake Levy
Aug 2020

Even though Java has released ES6 Class notation, its just some syntactic 
sugar.  JavaScript is a "prototype" based language.  */
var superClass = require("./class.js");

//NOTE: "name" is undefined for the child class.  It was NOT made part of the
//prototype so child can't find it.
class child extends superClass{

    constructor(name){
	super( name);
	
	this.LastName = "Smith";    
    }
    
//This sets the pointer for the parent class.  If a property does not exist
//directly in this object (like "name") then the parent definition will be
//searched.


    addedFunction(){

	super.addedFunction(); //prints "hi my name is..."

	//But notice how this object gets the inherited name
	console.log(`My full name is ${this.name} ${this.LastName}`);
    }
}


module.exports = child;
