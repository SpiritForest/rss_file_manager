import path from 'path';
import * as url from 'url';

export class Action {
    __dirname = url.fileURLToPath(new URL('.', import.meta.url));

    constructor(command) {
        if (this.constructor === Action) {
            throw new Error('The abstract class "Action" could not be instantiated');
        }

        this.path = path;
        this.command = command;
    }

    handle() {
        throw new Error('The handler must be overwritten');
    }
}
