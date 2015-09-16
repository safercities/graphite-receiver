var net = require('net');
var split = require('split');
var util = require('util');
var EventEmitter = require('events').EventEmitter;


function GraphiteSplitter(config){
	var self = this;

	var server = net.createServer();


	server.on('connection', function(socket){
		var stream = socket.pipe(split());
		stream.on('data', processLine);
	});

	function processLine(data){
		if(!data) return; //empty string

		data = data.split(' '); //Split on space


		self.emit('metric', {metric: data[0], value: data[1], timestamp: data[2]})
	}

	server.listen(config.port);

}

util.inherits(GraphiteSplitter, EventEmitter);


module.exports = function(config){
	return new GraphiteSplitter(config);
};