import { Animal } from "./animal";
import { Dog } from "./dog";
import { Bird } from "./bird";
import { CantFly, Flying } from "./flying";

/*
    In computer programming, the strategy pattern (also known as the policy pattern) is a behavioural software design pattern that enables an algorithm's behavior to be selected at runtime.
*/
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
