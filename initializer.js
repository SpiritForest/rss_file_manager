import { CommandHandler } from './CommandHandler.js';
import { Up } from './actions/directory/up.js';
import { Cd } from './actions/directory/cd.js';
import { Ls } from './actions/directory/ls.js';
import { Cat } from './actions/file/cat.js';
import { Add } from './actions/file/add.js';
import { Rn } from './actions/file/rn.js';
import { Cp } from './actions/file/cp.js';
import { Mv } from './actions/file/mv.js';
import { Rm } from './actions/file/rm.js';
import { Eol } from './actions/os/eol.js';
import { Cpu } from './actions/os/cpu.js';
import { Homedir } from './actions/os/homedir.js';
import { Username } from './actions/os/username.js';
import { Architecture } from './actions/os/architecture.js';
import { Hash } from './actions/hash/hash.js';
import { Compress } from './actions/archivator/compress.js';
import { Decompress } from './actions/archivator/decompress.js';

export const initActions = (commandHandler) => {
    commandHandler.addAction(new Up());
    commandHandler.addAction(new Cd());
    commandHandler.addAction(new Ls());
    commandHandler.addAction(new Cat());
    commandHandler.addAction(new Add());
    commandHandler.addAction(new Rn());
    commandHandler.addAction(new Cp());
    commandHandler.addAction(new Mv(new Cp(), new Rm()));
    commandHandler.addAction(new Rm());
    commandHandler.addAction(new Eol());
    commandHandler.addAction(new Cpu());
    commandHandler.addAction(new Homedir());
    commandHandler.addAction(new Username());
    commandHandler.addAction(new Architecture());
    commandHandler.addAction(new Hash());
    commandHandler.addAction(new Compress());
    commandHandler.addAction(new Decompress());

    return commandHandler;
}