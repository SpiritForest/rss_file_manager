import { Action } from '../Action.js';

export class Architecture extends Action {
    constructor() {
        super('--architecture');
    }

    handle() {
        console.log(this.os.arch());
    }
}