import { Action } from '../Action.js';

export class Cp extends Action {
    constructor() {
        super('cp');
    }

    async handle(args) {
        const [ pathToFile, pathToNewDirectory ] = args;
        const normalizedPathToFile = this.path.normalize(pathToFile);
        const filename = this.path.basename(normalizedPathToFile);
        const readStream = this.fs.createReadStream(this.path.normalize(pathToFile));
        const writeStream = this.fs.createWriteStream(this.path.join(pathToNewDirectory, filename));

        await this.streamPromises.pipeline(readStream, writeStream);
    }
}