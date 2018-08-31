import { Animal } from "./animal";
import { Dog } from "./dog";
import { Bird } from "./bird";
import { CantFly, Flying } from "./flying";

class StrategyDemo {

    constructor() {
        let dog: Animal = new Dog();
        let bird: Animal = new Bird();
        
        dog.flying();
        bird.flying();

        dog.setFlyingType(new Flying);
        dog.flying();
    }
}

new StrategyDemo();
