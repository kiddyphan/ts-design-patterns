import { HumanBuilder } from "./human-builder";
import { Human } from "./human";

export class HumanDirector {

    private humanBuilder: HumanBuilder;

    constructor(builder: HumanBuilder) {
        this.humanBuilder = builder;
        this.humanBuilder.create();
        this.humanBuilder.addHead();
        this.humanBuilder.addTorso();
        this.humanBuilder.addArms();
        this.humanBuilder.addLegs();
    }

    getHuman = (): Human => {
        return this.humanBuilder.getHuman();
    }
}