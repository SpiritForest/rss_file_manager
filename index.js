import { CommandHandler } from './CommandHandler.js';

const parseStringToCommands = (str) => {
    let [command, ...values] = str.split(' ');

    return {
        command: command.trim(),
        arguments: values.map((v) => v.trim())
    };
};

const getUserName = () => {
    const [, userName] = process.argv
        .slice(2)
        .join(' ')
        .replace('--', '')
        .split('=');

    return userName;
};

const greetUser = (user) => {
    process.stdout.write(`Welcome to the File Manager, ${user}!\n`);
};

const listenCLICommands = () => {
    process.stdin.on('data', (chunk) => {
        const commandData = parseStringToCommands(String(chunk));

        CommandHandler.startAction(commandData.command, commandData.arguments);
    });
};

const runFileManager = () => {
    const userName = getUserName();
    greetUser(userName);
    listenCLICommands();
}

runFileManager();