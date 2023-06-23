import { Action } from '../Action.js';

export class Cpu extends Action {
    constructor() {
        super('--cpus');
    }

    handle() {
        const cpuInfo = {
            cores: this.os.cpus().length,
            cpus: this.os.cpus().map((cpuInfo) => ({
                model: cpuInfo.model,
                clockRate: `${cpuInfo.speed / 1000} GHz`
            }))
        };

        console.log(cpuInfo);
    }
}