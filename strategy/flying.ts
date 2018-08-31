export interface Fly {
    fly: () => string
}

export class Flying implements Fly {
    fly = () => {
        return 'can fly';
    };
}

export class CantFly implements Fly {
    fly = () => {
        return 'cannot fly';
    };
}