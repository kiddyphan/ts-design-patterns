import { BasicCommand } from "./basic-command";
import { Device } from "./device";

export class VolumeUp implements BasicCommand {

    device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    execute = () => {
        this.device.volumeUp();
    }

    undo = () => {
        this.device.volumeDown();
    }

    redo = () => {
        this.execute();
    }
}