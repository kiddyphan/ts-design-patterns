import { BasicCommand } from "./basic-command";
import { Device } from "./device";

export class VolumeDown implements BasicCommand {

    device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    execute = () => {
        this.device.volumeDown();
    }

    undo = () => {
        this.device.volumeUp();
    }

    redo = () => {
        this.execute();
    }
}