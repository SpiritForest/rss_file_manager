import os from 'os';

import { initActions } from './initializer.js';
import { CommandHandler } from './CommandHandler.js';

const commandHandler = initActions(CommandHandler);

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

const greetUser = () => {
    process.stdout.write(`Welcome to the File Manager, ${getUserName()}!\n`);
};

const sayBye = () => {
    process.stdout.write(`Thank you for using File Manager, ${getUserName()}, goodbye!`)
}

const exit = () => {
    sayBye();
    process.exit();
}

const showCurrentDirectory = () => {
    process.stdout.write(`You are currently in ${process.cwd()}${os.EOL}`);
};

const showPrompt = () => {
    process.stdout.write(`Enter a command: `);
}

const navigateToUsersHomeDirectory = () => {
    process.chdir(os.homedir());
}

const listenCLICommands = () => {
    process.stdin.on('data', async (chunk) => {
        if (String(chunk).trim() === '.exit') {
            exit();
        } else {
            const commandData = parseStringToCommands(String(chunk));

            await commandHandler.startAction(commandData.command, commandData.arguments);
            showCurrentDirectory();
            showPrompt();
        }
    });
};

process.on('SIGINT', exit);

const runFileManager = () => {
    navigateToUsersHomeDirectory();
    greetUser(getUserName());
    showCurrentDirectory();
    showPrompt();
    listenCLICommands();
}

runFileManager();