import { Enemy } from "./enemy";

export class Alien extends Enemy {

    constructor() {
        super();
        this.name = 'Alien';
        this.damage = 50;
        this.direction = 'Right';
    }
}