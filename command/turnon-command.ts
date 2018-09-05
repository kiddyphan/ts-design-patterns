import { BasicCommand } from "./basic-command";
import { Device } from "./device";

export class TurnOn implements BasicCommand {

    devices: Device[] = [];

    constructor(devices: Device[]) {
        this.devices = devices;
    }

    execute = () => {
        this.devices.map((device: Device) => {
            device.on();
        });
    }

    undo = () => {
        this.devices.map((device: Device) => {
            device.off();
        });
    }

    redo = () => {
        this.execute();
    }
}