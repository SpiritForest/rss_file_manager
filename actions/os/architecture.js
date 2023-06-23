import { Action } from '../Action.js';

export class Architecture extends Action {
    constructor() {
        super('--architecture');
    }

    handle(args) {
        console.log(this.os.arch());
    }
}