import path from 'path';
import * as url from 'url';
import stream from 'stream/promises';
import fs from 'fs';
import os from 'os';

export class Action {
    __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    os = os;
    url = url;
    fs = fs;
    path = path;
    fsPromises = fs.promises;
    streamPromises = stream;

    constructor(command) {
        if (this.constructor === Action) {
            throw new Error('The abstract class "Action" could not be instantiated');
        }

        this.command = command;
    }

    handle() {
        throw new Error('The handler must be overwritten');
    }
}
