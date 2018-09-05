import { AfricanLion } from "./african-lion";
import { DogAdapter } from "./dog-adapter";
import { Dog } from "./dog";


/*
    Adapter pattern lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class.
*/
export class AdapterDemo {
    constructor() {
        let africanLion = new AfricanLion();
        africanLion.roar();
        
        // Adaptee
        let dog = new Dog();

        // Adapter
        let dogAdapter = new DogAdapter(dog);
        dogAdapter.roar();
    }
}

new AdapterDemo();