import { createBrotliCompress } from 'zlib';
import { Action } from '../Action.js';

export class Compress extends Action {
    constructor() {
        super('compress');
    }

    async handle(args) {
        const [ pathToFile, pathToDirectory ] = args;
        const fileName = this.path.basename(this.path.normalize(pathToFile));
        const readStream = this.fs.createReadStream(this.path.normalize(pathToFile));
        const writeStream = this.fs.createWriteStream(this.path.join(pathToDirectory, fileName + '.br'));

        await this.streamPromises.pipeline(readStream, createBrotliCompress(), writeStream);
    }
}