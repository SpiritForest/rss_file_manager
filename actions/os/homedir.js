import { Action } from '../Action.js';

export class Homedir extends Action {
    constructor() {
        super('--homedir');
    }

    handle() {
        console.log(this.os.homedir())
    }
}