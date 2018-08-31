import { Enemy } from "./enemy";

export class Asteroid extends Enemy {

    constructor() {
        super();
        this.name = 'Asteroid';
        this.damage = 10;
        this.direction = 'Left';
    }
}