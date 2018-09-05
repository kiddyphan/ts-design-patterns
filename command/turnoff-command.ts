import { BasicCommand } from "./basic-command";
import { Device } from "./device";

export class TurnOff implements BasicCommand {

    devices: Device[] = [];

    constructor(devices: Device[]) {
        this.devices = devices;
    }

    execute = () => {
        this.devices.map((device: Device) => {
            device.off();
        });
    }

    undo = () => {
        this.devices.map((device: Device) => {
            device.on();
        });
    }

    redo = () => {
        this.execute();
    }
}