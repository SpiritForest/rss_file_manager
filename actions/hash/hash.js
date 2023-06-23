import { createHash } from 'crypto';
import { Action } from '../Action.js';

export class Hash extends Action {
    constructor() {
        super('hash');
    }

    async handle(args) {
        const [ pathToFile ] = args;
        const readStream = this.fs.createReadStream(this.path.normalize(pathToFile));
        const hash = createHash('sha256');

        await new Promise((res, rej) => {
            const stream = readStream.pipe(hash).setEncoding('hex');
            stream.on('data', console.log);
            stream.on('end', res);
            stream.on('error', rej);
        });
    }
}