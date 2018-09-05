import { Animal } from "./animal";

export class Sheep implements Animal {

    private _name: string = '';

    public get name(): string {
        return this._name
    }

    public set name(v: string) {
        this._name = v;
    }

    makeCopy = () => {
        let clone = new Sheep();

        let props = Object.getOwnPropertyNames(this);
        props.map((key) => {
            let desc = Object.getOwnPropertyDescriptor(this, key);
            if (typeof desc.value !== "function") {
                Object.defineProperty(clone, key, desc);
            }
        });

        return clone;
    }

    description = () => {
        console.log('This is ' + this._name);
    }
}

function clone<T>(instance: T): T {
    const copy = new (instance.constructor as { new(): T })();
    Object.assign(copy, instance);
    return copy;
}