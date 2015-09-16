var config = {
	port: 7777
};

var graphiteSplitter = require('../index.js')(config);

graphiteSplitter.on('metric', console.log);