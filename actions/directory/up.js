import { Action } from '../Action.js';

export class Up extends Action {
    constructor() {
        super('up');
    }

    handle() {
        process.chdir('../');
    }
}