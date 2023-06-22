import { Action } from '../Action.js';

export class Rm extends Action {
    constructor() {
        super('rm');
    }

    async handle(args) {
        const [ pathToFile ] = args;

        await this.fsPromises.rm(this.path.normalize(pathToFile));
    }
}