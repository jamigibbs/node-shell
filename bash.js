const pwd = require('./pwd').getPwd;
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('promt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if (cmd === 'pwd') {
        pwd(cmd);
    } else if (cmd === 'ls'){
        ls();
    } else if (cmd.slice(0, 3) === 'cat'){
        cat(cmd.slice(4));
    } else if (cmd.slice(0, 4) === 'curl') {
        curl(cmd.slice(4));
    }
})
