import { Theme } from "./theme";

export abstract class WebPage {

    protected name: string;
    protected theme: Theme;

    constructor(theme: Theme) {
        this.theme = theme;
    }

    setTheme = (theme: Theme) => {
        this.theme = theme;
    }

    abstract render = () => {};

}