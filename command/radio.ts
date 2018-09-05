import { Device } from "./device";

export class Radio implements Device {

    private _volume: number = 5;

    on = () => {
        console.log('Turn Radio On');
    };

    off = () => {
        console.log('Turn Radio Off');
    };

    volumeUp = () => {
        this._volume++;
        console.log('Radio Volume at ' + this._volume);
    };

    volumeDown = () => {
        this._volume--;
        console.log('Radio Volume at ' + this._volume);
    };
}