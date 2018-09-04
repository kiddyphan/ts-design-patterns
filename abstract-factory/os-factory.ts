import { AbstractMenu, Menu } from "./menu";
import { AbstractButton, Button } from "./button";

export interface OSFactory {
    buildMenu: () => AbstractMenu;
    buildButton: () => AbstractButton;
}

// concrete class
export class MacOSFactory implements OSFactory {
    buildMenu = () => {
        return new Menu('MacOS Menu');
    }

    buildButton = () => {
        return new Button('MacOS Button');
    }
}

export class LinuxOSFactory implements OSFactory {
    buildMenu = () => {
        return new Menu('LinusOS Menu');
    }

    buildButton = () => {
        return new Button('LinusOS Button');
    }
}

export class WindowsOSFactory implements OSFactory {
    buildMenu = () => {
        return new Menu('WindowsOS Menu');
    }

    buildButton = () => {
        return new Button('WindowsOS Button');
    }
}