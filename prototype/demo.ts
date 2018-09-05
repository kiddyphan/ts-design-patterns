import { Sheep } from "./sheep";
import { CloneFactory } from "./clone-factory";

/*
    The prototype pattern is a creational design pattern in software development. It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects.
*/
class PrototypeDemo {

    constructor() {
        let sheep = new Sheep();
        sheep.name = 'Dolly';
        sheep.description();

        let sheepClone = new CloneFactory().getClone(sheep) as Sheep;
        sheepClone.name = 'Mini';
        sheepClone.description();

        console.log(sheep);
        console.log(sheepClone);
        
    }
}

new PrototypeDemo();
