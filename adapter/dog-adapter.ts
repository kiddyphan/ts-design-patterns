import { Dog } from "./dog";
import { Lion } from "./lion";

export class DogAdapter implements Lion {

    protected dog: Dog;

    constructor(dog: Dog) {
        this.dog = dog;
    }

    roar = () => {
        this.dog.bark();
    }
}