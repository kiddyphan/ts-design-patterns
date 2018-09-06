import { Theme } from "./theme";
import { WebPage } from "./webpage";

export class AboutPage extends WebPage {

    constructor(theme: Theme) {
        super(theme);

        this.name = 'About';
    }

    render = (): void => {
        console.log(this.name + ' page with ' + this.theme.color());
    }
}