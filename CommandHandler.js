import os from 'os';

import { Up } from './actions/directory/up.js';
import { Cd } from './actions/directory/cd.js';
import { Ls } from './actions/directory/ls.js';
import { Cat } from './actions/file/cat.js';
import { Add } from './actions/file/add.js';
import { Rn } from './actions/file/rn.js';
import { Cp } from './actions/file/cp.js';
import { Mv } from './actions/file/mv.js';
import { Rm } from './actions/file/rm.js';

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

CommandHandler.addAction(new Up());
CommandHandler.addAction(new Cd());
CommandHandler.addAction(new Ls());
CommandHandler.addAction(new Cat());
CommandHandler.addAction(new Add());
CommandHandler.addAction(new Rn());
CommandHandler.addAction(new Cp());
CommandHandler.addAction(new Mv(new Cp(), new Rm()));
CommandHandler.addAction(new Rm());