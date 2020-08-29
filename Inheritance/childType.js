/*
childType.js
Jake Levy
Aug 2020

Even though Java has released ES6 Class notation, its just some syntactic 
sugar.  JavaScript is a "prototype" based language.  */
var superClass = require("./prototype.js");

//NOTE: "name" is undefined for the child class.  It was NOT made part of the
//prototype so child can't find it.
var child = function(name){

    superClass.call(this, name);

    this.LastName = "Smith";    
};

//This sets the pointer for the parent class.  If a property does not exist
//directly in this object (like "name") then the parent definition will be
//searched.
child.prototype.__proto__=superClass.prototype;

child.prototype.addedFunction = function(){
    //The addedFunction from my Superclass can run but it does not have access
    //to this object's data.  In other this.name belongs to the child, not the
    //parent.
    superClass.prototype.addedFunction();

    //But notice how this object gets the inherited name
    console.log(`My last name is ${this.name} ${this.LastName}`);
};


module.exports = child;
