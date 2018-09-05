import { Animal } from "./animal";

export class CloneFactory {

    getClone = (animal: Animal): Animal => {
        return animal.makeCopy();
    }
}