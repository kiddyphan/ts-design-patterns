import { ManBuilder } from "./man-builder";
import { WomanBuilder } from "./woman-builder";
import { HumanDirector } from "./human-director";

/*
    The builder pattern is an object creation software design pattern with the intentions of finding a solution to the telescoping constructor anti-pattern.
*/
class BuilderDemo {

    constructor() {
        let manBuilder = new ManBuilder();
        let womanBuilder = new WomanBuilder();

        let manDirector = new HumanDirector(manBuilder);
        console.log(manDirector.getHuman().head);
        console.log(manDirector.getHuman().torso);
        console.log(manDirector.getHuman().arms);
        console.log(manDirector.getHuman().legs);
        
        let womanDirector = new HumanDirector(womanBuilder);
        console.log(womanDirector.getHuman().head);
        console.log(womanDirector.getHuman().torso);
        console.log(womanDirector.getHuman().arms);
        console.log(womanDirector.getHuman().legs);

    }
}

new BuilderDemo();
