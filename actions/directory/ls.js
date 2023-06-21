import { readdir } from 'fs/promises';

import { Action } from '../Action.js';

export class Ls extends Action {
    constructor() {
        super('ls');
    }

    sort(arr) {
        arr.sort((a, b) => {
            const nameA = a.Name.toUpperCase();
            const nameB = b.Name.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }

            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });
    }

    async handle() {
        const listOfDirObjects = await readdir(process.cwd(), { withFileTypes: true });
        const directories = listOfDirObjects
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => ({
                Name: dirent.name,
                Type: 'directory'
            }));

        const files = listOfDirObjects
            .filter((dirent) => dirent.isFile())
            .map((dirent) => ({
                Name: dirent.name,
                Type: 'file'
            }));

        this.sort(directories);
        this.sort(files);

        console.table(directories.concat(files));
    }
}