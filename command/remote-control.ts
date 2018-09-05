import { BasicCommand } from "./basic-command";

export class RemoteControl {

    command: BasicCommand;

    constructor(command: BasicCommand) {
        this.command = command;
    }

    press = (keyCode: number) => {
        switch (keyCode) {
            case 1:
                this.command.execute();
                break;
            case 2:
                this.command.undo();
                break;
            case 3:
                this.command.redo();
                break;
        }
    }
}