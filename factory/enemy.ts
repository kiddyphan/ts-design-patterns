type Direction = 'Up' | 'Down' | 'Left' | 'Right';

export abstract class Enemy {

    private _name: string;
    private _damage: number;
    private _direction: Direction;

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get damage(): number {
        return this._damage;
    }

    public set damage(damage: number) {
        this._damage = damage;
    }

    public get direction(): Direction {
        return this._direction;
    }

    public set direction(direction: Direction) {
        this._direction = direction;
    }

    public followHeroShip = () => {
        console.log(this._name + ' follow hero ship');
    }

    public dealtDamage = () => {
        console.log(this._name + ' dealt ' + this._damage + ' damages');
    }
}