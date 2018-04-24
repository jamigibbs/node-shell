let pwd = require('./pwd').getPwd;
let ls = require('./ls');
let cat = require('./cat');

process.stdout.write('promt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    console.log('command', cmd.slice(0, 3));
    console.log('file', cmd.slice(4));

    if (cmd === 'pwd') {
        pwd(cmd);
    } else if (cmd === 'ls'){
        ls();
    } else if (cmd.slice(0, 3) === 'cat'){
        cat(cmd.slice(4));
    }
})
