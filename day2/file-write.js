const fs = require("fs");
const path = reqire("path");

fs.writeFile(path.join(__dirname + "hello.txt"), "Started Node\n",
	function (err){
		if(err)return console.log("Error!")
	}
);