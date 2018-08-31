import { Fly } from "./flying";

export class Animal {

    private _name: string;
    private _legs: number;
    public flyingType: Fly;

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get legs(): number {
        return this._legs;
    }

    public set legs(_legs: number) {
        this._legs = _legs;
    }

    flying = () => {
        let msg = this.flyingType.fly();
        console.log(this._name + ' ' + msg);
    }

    setFlyingType = (flyingType: Fly) => {
        this.flyingType = flyingType;
    }

}