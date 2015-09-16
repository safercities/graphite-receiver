graphite-splitter
=

Small utility to act as a plaintext carbon backend and emit metrics when they're received.

Example:
--

```javascript
var config = {
	port: 7777
};

var graphiteSplitter = require('../index.js')(config);

graphiteSplitter.on('metric', console.log);
```

Outputs:
--

```javascript
{ 
  metric: 'local.random.diceroll',
  value: '4',
  timestamp: '1442363704'
 }
```