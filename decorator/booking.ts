export interface Booking {
    getCost: () => number;
    getDescription: () => string;
}

export class Room implements Booking {

    private _room: number;

    constructor(room: number) {
        this._room = room;
    }

    getCost = () => {
        return 500;
    };

    getDescription = () => {
        return 'Booking room: ' + this._room;
    };
}