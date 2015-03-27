var lib = require('./lib.js');

lib.executeCommand('ls -lrt', function(err, out) {
	if (err) throw err;
	console.log('Check that the directory you are currently in contains the following elements:');
	console.log(out);
});