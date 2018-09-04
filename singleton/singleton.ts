export class Singleton {

    private static _instance: Singleton = null;

    public static getInstance = (): Singleton => {
        if (Singleton._instance === null) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    }
}