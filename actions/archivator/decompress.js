import { createBrotliDecompress } from 'zlib';
import { Action } from '../Action.js';

export class Decompress extends Action {
    constructor() {
        super('decompress');
    }

    async handle(args) {
        const [ pathToFile, pathToDirectory ] = args;
        const fileName = this.path.basename(this.path.normalize(pathToFile)).replace('.br', '');
        const readStream = this.fs.createReadStream(this.path.normalize(pathToFile));
        const writeStream = this.fs.createWriteStream(this.path.join(pathToDirectory, fileName));

        await this.streamPromises.pipeline(readStream, createBrotliDecompress(), writeStream);
    }
}