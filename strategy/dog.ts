import { Animal } from "./animal";
import { CantFly } from "./flying";

export class Dog extends Animal {
    constructor() {
        super();

        this.name = 'Lucky';
        this.legs = 4;

        this.flyingType = new CantFly();
    }
}