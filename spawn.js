const spqwn = require('child_process').spawn;

const process = spqwn('python', ['test.py']);

process.stdout.on('data', function(data) {
    console.log('data.toString');
});

process.stderr.on('data', function(data) {
    console.log(data.toString());
});