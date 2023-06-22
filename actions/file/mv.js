import { Action } from '../Action.js';

export class Mv extends Action {
    constructor(copy, remove) {
        super('mv');

        this.copy = copy;
        this.remove = remove;
    }

    async handle(args) {
        await this.copy.handle(args);
        await this.remove.handle(args);
    }
}