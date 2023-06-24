import { Action } from '../Action.js';

export class Rn extends Action {
    constructor() {
        super('rn');
    }

    async handle(args) {
        const [ pathToFile, newFileName ] = args;
        const oldPath = this.path.normalize(pathToFile);
        const oldFileName = this.path.basename(oldPath);
        const newPath = oldPath.replace(oldFileName, '') + newFileName;

        await this.fsPromises.rename(
            oldPath,
            newPath
        );
    }
}