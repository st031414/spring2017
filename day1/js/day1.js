console.log("aaa");

var Cat = function(name){
	this.name = name;
	Cat.prototype.run = function(){
		console.log(this.name+"������");
	}
}

var tama = new cat("dede");
tama.run();
console.log(tama.name);