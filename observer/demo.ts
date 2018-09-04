import { Subject } from "./subject";
import { Observer } from "./observer";

/*
    The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.
*/
class ObserverDemo {

    constructor() {
        let subject = new Subject();
        let observer1 = new Observer(subject);

        subject.setName('thang123');

        let observer2 = new Observer(subject);
        subject.setName('aloha123');

        subject.unregister(observer1);
        subject.setName('you678');
    }
}

new ObserverDemo();
