export interface AbstractButton {
    description: () => void
}

// concrete class
export class Button implements AbstractButton {

    private name: string = '';

    constructor(name: string) {
        this.name = name;
    }

    description = () => {
        console.log(this.name);
    };
}