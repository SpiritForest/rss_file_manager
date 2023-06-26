import { Action } from '../Action.js';

export class Eol extends Action {
    constructor() {
        super('--EOL');
    }

    handle() {
        console.log(
            this.os.EOL
                .replace(new RegExp('\r'), '\\r')
                .replace(new RegExp('\n'), '\\n')
        );
    }
}