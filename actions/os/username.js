import { Action } from '../Action.js';

export class Username extends Action {
    constructor() {
        super('--username');
    }

    handle() {
        console.log(this.os.userInfo().username)
    }
}