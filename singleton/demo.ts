import { Singleton } from "./singleton";

/*
    In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.
*/
class SingletonDemo {

    constructor() {
        let firstSingleton = Singleton.getInstance();
        let secondSingleton = Singleton.getInstance();
        
        if (firstSingleton === secondSingleton) {
            console.log('setup singleton suscess');
        } else {
            console.log('setup singleton fail');
        }
    }
}

new SingletonDemo();
