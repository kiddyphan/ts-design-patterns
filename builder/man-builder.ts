import { HumanBuilder } from "./human-builder";
import { Man } from "./man";

export class ManBuilder implements HumanBuilder {

    private _man: Man;

    create = () => {
        this._man = new Man();
        return this._man;
    }

    addHead = () => {
        this._man.head = 'Man Head';
    }

    addTorso = () => {
        this._man.torso = 'Man Torso';
    }

    addArms = () => {
        this._man.arms = 'Man Arms';
    }

    addLegs = () => {
        this._man.legs = 'Man Legs';
    }

    getHuman = () => {
        return this._man;
    }
}