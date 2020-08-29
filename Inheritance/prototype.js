//A more complicated object 
//Jake Levy
//Aug 2020
var simple = function(name){
    this.name = name;
};

//opening up the prototype allows us to add functionality to the object
simple.prototype = {

    addedFunction: function(){
	console.log(`Hi my name is ${this.name}`);

    }
};
		    
//Now any object made with this class constructor will have the function
//addedFunction and a name property
module.exports = simple;
