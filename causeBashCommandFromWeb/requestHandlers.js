var exec = require("child_process").exec;
var querystring = require("querystring");
fs = require("fs");

function start(response, postData) {
	console.log("Request handler 'start' was called.");

	exec("ls -lah", function(error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(stdout);
		response.end();
	});

}

function upload(response, postData) {
	console.log("Request  handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();
}

exports.start = start;
exports.upload = upload;
