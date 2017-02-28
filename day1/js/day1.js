console.log("aaa");

var Cat = function(name){
	this.name = name;
}

Cat.prototype.run = function(){
		console.log(this.name+"‚ª‘–‚é");
	}

var tama = new Cat("dede");
tama.run();
console.log(tama.name);