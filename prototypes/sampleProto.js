//sampleProto.js
/*
Jake Levy
Aug 2020
An example of prototyping objects
*/

//Another valid way of writing a "constructor"
function someObject(){
    this.fName="some";
    this.alt = "Object";
    this.test = function(){
	console.log("TEST");
    }
}
//Notice that the prototype is automatically created but is empty intially
console.log(someObject.prototype);

var previous = new someObject()
var count = 0;
//these properties are not "part of the prototype" but the original constructor
for (prop in previous){
    count+=1;
}
    console.log(`${count} properties in someObject`);

//We can add to it
someObject.prototype ={
    newFunction: function(){
	console.log("newFunction:");
	console.log(`${this.fName} ${this.alt}`);
    }
};

//Now we can create instances from itt
var current = new someObject();

//Now examine the prototype after we have added a function to it
console.log(someObject.prototype);
 
current.newFunction();
current.test();


count = 0;
//Notice properties that are "part of the prototype" ARE "part of the object" 
for (prop in current){
    count+=1;
}
    console.log(`${count} properties in someObject`);
