import { ISubject } from "./subject";

export interface IObserver {
    update(name: string): void;
}

export class Observer implements IObserver {

    private name: string = '456';
    private subject: ISubject;
    private static observerIdTraker: number = 0;
    public observerId: number = 0;

    constructor(subject: ISubject) {
        this.subject = subject;
        this.observerId = ++Observer.observerIdTraker;

        console.log("New Observer added: " + this.observerId);

        this.subject.register(this);
        
    }

    update = (name: string): void => {
        this.name = name;
        this.log();
    }

    log = () => {
        console.log("Name: " + this.name); 
    }

}