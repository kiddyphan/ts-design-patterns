import { EnemyFactory } from "./enemyfactory";
import { Enemy } from "./enemy";

class FactoryDemo {

    constructor() {
        let enemy = new EnemyFactory().makeEnemy('BA');
        this.doStuff(enemy);
    }
    
    doStuff = (enemy: Enemy) => {
        enemy.followHeroShip();
        enemy.dealtDamage();
    }
}

new FactoryDemo();