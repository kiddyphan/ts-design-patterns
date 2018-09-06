import { ATMProxy } from "./atm-proxy";

/*
    Using the proxy pattern, a class represents the functionality of another class.
*/
class ProxyDemo {

    constructor() {
        let atmProxy = new ATMProxy('123456');
        atmProxy.deposit();
    }
}

new ProxyDemo();
