import { Animal } from "./animal";
import { Flying } from "./flying";

export class Bird extends Animal {
    constructor() {
        super();

        this.name = 'Mockingbird';
        this.legs = 2;

        this.flyingType = new Flying();
    }
}