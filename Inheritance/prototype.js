//A more complicated object 
//Jake Levy
//Aug 2020

//Class notation is "syntactic sugar" (convenient) used to hide JS prototyping
//But "under the hood" all defined JS objects are prototype based
class simple{
    //classes may only have ONE constuctor function
    constructor(name){
    this.name = name;
    }

//Notice that the addedFunction is just listed inside the class definition
    addedFunction(){
	console.log(`Hi my name is ${this.name}`);

    }
}

module.exports = simple;
