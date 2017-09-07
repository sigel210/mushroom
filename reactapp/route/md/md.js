var http = require("http");
var request = require('request');
module.exports = {
	connect: function(url,res) {		
		request(url, function(error, response, body) {
			if(!error && response.statusCode == 200) {
				res.write(body)
				res.end()
			}
		})

	}
}