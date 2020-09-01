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

// Every object has its own prototype. New instances are clones of the
//prototype.   Prototypes serve as blue prints like Classes do, but Classes
//are purely theoretical whereas prototypes are actual instances.
//We use's child's prototype to create new instances of the child class.

//Every object has a prototype, including prototypes themselves(__proto__).
//Prototype's prototype points to its parent prototype, if it has one
//otherwise it points to null..

//commented line below is a REALLY OLD way of setting this object's prototype

//child.prototype.__proto__=superClass.prototype;

//So old that it is now no longer the standard way of setting it (of course
//your book still uses it *sigh*).  If you write your code to ES5 standards
//you should implement inheritance in one of the ways shown below

//It is standard (and much safer) to use the setPrototypeOf Method, rather
//than playing with the prototype property directly. 

//Option A
Object.setPrototypeOf(this, Object.getPrototypeOf(superClass));
//Option B
//Object.setPrototypeOf(this, new superClass());
//Option C
//child.prototype = new superClass();


child.prototype.addedFunction = function(){
    //The addedFunction from my Superclass can run but it does not have access
    //to this object's data.  In other this.name belongs to the child, not the
    //parent. This effectively demonstrates they are different objects.
    superClass.prototype.addedFunction();
//    child.prototype.addedFunction();
    //But notice how this object gets the inherited name
    console.log(`My Full name is ${this.name} ${this.LastName}`);
};


module.exports = child;
