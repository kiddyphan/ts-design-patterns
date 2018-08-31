import { Enemy } from "./enemy";
import { Alien } from "./alien";
import { Asteroid } from "./asteroid";
import { BigAsteroid } from "./bigasteroid";

export class EnemyFactory {

    public makeEnemy = (type: string): Enemy => {
        let newEnemy = null;

        switch (type) {
            case 'AL':
                newEnemy = new Alien();
                break;
            case 'A':
                newEnemy = new Asteroid();
                break;
            case 'BA':
                newEnemy = new BigAsteroid();
                break;
        }

        return newEnemy;
    }
}
