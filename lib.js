var child_process = require('child_process'),
	lib = {};

/**
 * Method to fire up command line commands, as attached e.g. to an installation or uninstallation script.
 */
lib.executeCommand = function(command, callback) {
	child_process.exec(command, function(err, stdout, stderr) {
		if (stderr) return callback(stderr);
		if (err) return callback(err);
		callback(false, stdout);
	});
}

module.exports = lib;