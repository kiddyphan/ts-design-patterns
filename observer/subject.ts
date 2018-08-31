import { Observer } from "./observer";

export interface ISubject {
    register: (observer: Observer) => void;
    unregister: (observer: Observer) => void;
    notify: () => void;
};

export class Subject implements ISubject {

    private observers: Observer[] = [];
    private name: string = '123';

    register = (newObserver: Observer) => {
        this.observers.push(newObserver);
    };

    unregister = (removeObserver: Observer) => {
        let n: number = this.observers.indexOf(removeObserver);
        console.log("Observer" + removeObserver.observerId + " is removed");
        this.observers.splice(n, 1);
    };

    notify = () => {
        this.observers.map((observer: Observer) => {
            observer.update(this.name);
        });
    };

    setName = (name: string) => {
        this.name = name;
        this.notify();
    }
}