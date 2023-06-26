import { Action } from '../Action.js';

export class Add extends Action {
    constructor() {
        super('add');
    }

    handle(args) {
        const [ fileName ] = args;

        return this.fsPromises.writeFile(fileName, "");
    }
}