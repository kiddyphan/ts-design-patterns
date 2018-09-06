import { Theme } from "./theme";
import { WebPage } from "./webpage";

export class HomePage extends WebPage {

    constructor(theme: Theme) {
        super(theme);

        this.name = 'Home';
    }

    render = (): void => {
        console.log(this.name + ' page with ' + this.theme.color());
    }
}