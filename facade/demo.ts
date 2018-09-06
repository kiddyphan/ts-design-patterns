import { Computer } from "./computer";
import { ComputerFacade } from "./computer-facade";


/*
    Facade pattern provides a simplified interface to a complex subsystem.
*/
class FacadeDemo {

    constructor() {
        let computer = new Computer();
        let computerFacade = new ComputerFacade(computer);

        computerFacade.turnOn();
        computerFacade.turnOff();
    }
}

new FacadeDemo();
