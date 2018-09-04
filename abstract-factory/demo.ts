import { MacOSFactory, LinuxOSFactory, WindowsOSFactory } from "./os-factory";

/*
    The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes
*/
class AbstractFactoryDemo {

    constructor() {
        let macOS = new MacOSFactory();
        macOS.buildMenu().description();
        macOS.buildButton().description();

        let linuxOS = new LinuxOSFactory();
        linuxOS.buildMenu().description();
        linuxOS.buildButton().description();

        let windowsOS = new WindowsOSFactory();
        windowsOS.buildMenu().description();
        windowsOS.buildButton().description();
    }

    test = () => {

    }
}

new AbstractFactoryDemo();
