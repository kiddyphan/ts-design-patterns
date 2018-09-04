import { HumanBuilder } from "./human-builder";
import { Woman } from "./woman";

export class WomanBuilder implements HumanBuilder {

    private _woman: Woman;

    create = () => {
        this._woman = new Woman();
        return this._woman;
    }

    addHead = () => {
        this._woman.head = 'Woman Head with long hair';
    }

    addTorso = () => {
        this._woman.torso = 'Woman Torso with breast';
    }

    addArms = () => {
        this._woman.arms = 'Woman Arms';
    }

    addLegs = () => {
        this._woman.legs = 'Woman Legs';
    }

    getHuman = () => {
        return this._woman;
    }
}