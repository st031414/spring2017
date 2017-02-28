const fs = require("fs");
const rs = fs.createReadStream("stream.txt",{encoding: "utf8"});
rs.on("data",function(data){
	console.log("data >>>\n" + data);
});
rs.on("end",function(){
	console.log(">>> END");
});