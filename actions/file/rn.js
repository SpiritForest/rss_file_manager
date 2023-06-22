import { Action } from '../Action.js';

export class Rn extends Action {
    constructor() {
        super('rn');
    }

    handle(args) {
        const [ pathToFile, newFileName ] = args;
        const normalizedPathToFile = this.path.normalize(pathToFile);
        const oldFileName = this.path.basename(normalizedPathToFile);

        return this.fsPromises.rename(
            normalizedPathToFile,
            this.path.join(oldFileName, newFileName)
        );
    }
}