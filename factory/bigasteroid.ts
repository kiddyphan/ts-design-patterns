import { Asteroid } from "./asteroid";

export class BigAsteroid extends Asteroid {

    constructor() {
        super();
        this.name = 'Asteroid Big One';
        this.damage = 30;
        this.direction = 'Up';
    }
}