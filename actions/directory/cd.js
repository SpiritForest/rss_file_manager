import { Action } from '../Action.js';

export class Cd extends Action {
    constructor() {
        super('cd');
    }

    handle(args) {
        const [ path ] = args;
        process.chdir(this.path.normalize(path));
    }
}