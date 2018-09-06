import { Computer } from "./computer";

export class ComputerFacade {

    protected computer: Computer;

    constructor (computer: Computer) {
        this.computer = computer;
    }

    turnOn = () => {
        this.computer.powerOn();
        this.computer.showBios();
        this.computer.showWelcomeScreen();
        this.computer.showDesktop();
    }

    turnOff = () => {
        this.computer.showPopupShutDown();
        this.computer.closeAllApplications();
        this.computer.showLoadingScreen();
        this.computer.powerOff();
    }

}