export class Human {
    private _head: string;
    private _torso: string;
    private _arms: string;
    private _legs: string;

    public get head(): string {
        return this._head;
    }

    public set head(head: string) {
        this._head = head;
    }

    public get torso(): string {
        return this._torso;
    }

    public set torso(torso: string) {
        this._torso = torso;
    }

    public get arms(): string {
        return this._arms;
    }

    public set arms(arms: string) {
        this._arms = arms;
    }

    public get legs(): string {
        return this._legs;
    }

    public set legs(legs: string) {
        this._legs = legs;
    }
}