import { Action } from '../Action.js';

export class Cat extends Action {
    constructor() {
        super('cat');
    }

    async handle(args) {
        const [ pathToFile ] = args;
        const readableStream = this.fs.createReadStream(this.path.normalize(pathToFile));

        await new Promise((res, rej) => {
            readableStream.on('data', (chunk) => {
                console.log(String(chunk));
            });

            readableStream.on('error', rej);
            readableStream.on('end', res);
        });
    }
}