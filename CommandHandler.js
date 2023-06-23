import os from 'os';

export class CommandHandler {
    static actions = new Map();
    static os = os;

    static addAction(action) {
        CommandHandler.actions.set(action.command, action);
    }

    static async tryToPerformAction(actionName, args) {
        try {
           await CommandHandler.actions.get(actionName).handle(args);
        } catch (err) {
            process.stderr.write(`Operation failed${os.EOL}`);
        }
    }

    static async startAction(action, args = []) {
        if (!CommandHandler.actions.get(action)) {
            process.stderr.write(`Invalid input${os.EOL}`);
        } else {
            await CommandHandler.tryToPerformAction(action, args);
        }
    }
}