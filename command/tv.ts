import { Device } from "./device";

export class TV implements Device {

    private _volume: number = 5;

    on = () => {
        console.log('Turn TV On');
    };

    off = () => {
        console.log('Turn TV Off');
    };

    volumeUp = () => {
        this._volume++;
        console.log('TV Volume at ' + this._volume);
    };

    volumeDown = () => {
        this._volume--;
        console.log('TV Volume at ' + this._volume);
    };
}