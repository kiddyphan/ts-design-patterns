import { Subject } from "./subject";
import { Observer } from "./observer";

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
