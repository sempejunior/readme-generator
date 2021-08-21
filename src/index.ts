import * as yargs from 'yargs';

const argv = yargs.options({
    env: {
        alias: 'e',
        choices: ['dev', 'prod'] as const,
        demandOption: true,
        description: 'app environment'
    },
    port: {
        alias: 'p',
        default: 80,
        description: 'port'
    }
  })
    .argv;

console.log(argv);