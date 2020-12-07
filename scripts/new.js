'use strict';

const cp = require('child_process');
const path = require('path');

const { program } = require('commander');

const pgk = require('../package.json');

program.storeOptionsAsProperties(false);
program.version(pgk.version);

program
    .option('-t, --type <type>', 'The type of the new post', 'posts')
    .requiredOption('-n, --name <name>', 'The name of the new post', '');

program.parse(process.argv);

const exec = (cmdStr) => new Promise((res, rej) => {
    const cwd = path.join(__dirname, '..', 'src');

    const [cmd, ...args] = cmdStr.trim().split(' ');

    const proc = cp.spawn(cmd, args, { stdio: ['inherit', 'inherit', 'inherit'], cwd });

    proc.on('close', res)

    proc.on('error', rej);
});

const main = async () => {
    const hugoDir = path.join(__dirname, '..', 'src');

    const {type, name} = program.opts();
    const combinedName = name
        .split(' ')
        .map(s => s.replace(/[^A-Za-z0-9]/gmi, ''))
        .filter(s => s)
        .join('-')
        .toLowerCase();

    const cmd = `hugo new ${type}/${combinedName}.md`;

    console.log(cmd);

    return exec(cmd);
};

main().catch(console.error);
