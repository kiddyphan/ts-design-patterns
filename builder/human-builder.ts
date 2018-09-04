import { Human } from "./human";

export interface HumanBuilder {
    create: () => Human;
    addHead: () => void;
    addTorso: () => void;
    addArms: () => void;
    addLegs: () => void;
    getHuman: () => Human;
}