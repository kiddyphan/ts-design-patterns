export interface AbstractMenu {
    description: () => void
}

// concrete class
export class Menu implements AbstractMenu {

    private name: string = '';

    constructor (name: string) {
        this.name = name;
    }

    description = () => {
        console.log(this.name);
    };
}