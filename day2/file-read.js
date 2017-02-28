const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname,"hello.txt"),
	{encoding: "utf8"},
	function (err, data){
		if(err) return console.error("Error");
		console.log(process.cwd());
		process.chdir("/");
		console.log("contents of the file is");
		console.log(data);
	});