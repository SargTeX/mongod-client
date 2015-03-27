var lib = require('./lib.js');

console.log('At the end of this testing, you will receive a directory listing');
console.log('This directory listing also has to contain the file "./test.txt" which contains "Hello, World!"');
lib.writeFile('./test.txt', 'Hello, World!', function(err) {
	if (err) throw err;
	console.log('Check that the directory you are currently in contains the following elements:');
	lib.executeCommand('ls -lrt', function(err, out) {
		if (err) throw err;
		console.log(out);
	});
});